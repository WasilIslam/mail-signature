import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Mail.module.css";

const basicFonts = [
  "Arial",
  "Helvetica",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Lucida Console",
];

export default function Home() {
  const editorRef = useRef(null);
  const [color, setColor] = useState("");
  const [font, setFont] = useState("Arial");
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      editorRef.current.innerHTML = savedContent;
    }
  }, []);

  const handleBold = () => {
    editorRef.current.focus();
    document.execCommand("bold", false, null);
    setBoldActive(!boldActive);
  };

  const handleItalic = () => {
    editorRef.current.focus();
    document.execCommand("italic", false, null);
    setItalicActive(!italicActive);
  };

  const handleChangeColor = (newColor) => {
    editorRef.current.focus();
    document.execCommand("foreColor", false, newColor);
    setColor(newColor);
  };

  const handleChangeFont = (newFont) => {
    editorRef.current.focus();
    document.execCommand("fontName", false, newFont);
    setFont(newFont);
  };

  const handleAddLink = () => {
    const url = prompt("Enter the URL:");
    if (url !== null) {
      const anchorText = prompt("Enter the anchor text for the link:");
      if (anchorText !== null) {
        const linkHTML = `<a href="${url}">${anchorText}</a>`;
        editorRef.current.focus();
        document.execCommand("insertHTML", false, linkHTML);
      }
    }
  };

  const handleAddImage = (base64Image, width, height, anchorLink) => {
    const imageHTML = `<a href="${anchorLink}"><img src="${base64Image}" style="width: ${width}px; height: ${height}px;" /></a>`;
    editorRef.current.focus();
    document.execCommand("insertHTML", false, imageHTML);
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const newImages = [];

    for (const file of files) {
      const base64Image = await convertToBase64(file);
      newImages.push({
        url: base64Image,
        file,
        width: 100,
        height: 100,
        anchorLink: "",
      });
    }

    setImages([...images, ...newImages]);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleSaveDraft = () => {
    const content = editorRef.current.innerHTML;
    localStorage.setItem("editorContent", content);
    alert("Draft saved successfully.");
  };

  const handleLoadDraft = () => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      editorRef.current.innerHTML = savedContent;
      alert("Draft loaded successfully.");
    } else {
      alert("No draft found.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <button
          className={boldActive ? styles.active : ""}
          onClick={handleBold}
        >
          Bold
        </button>
        <button
          className={italicActive ? styles.active : ""}
          onClick={handleItalic}
        >
          Italic
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => handleChangeColor(e.target.value)}
        />
        <select value={font} onChange={(e) => handleChangeFont(e.target.value)}>
          {basicFonts.map((fontName) => (
            <option key={fontName} value={fontName}>
              {fontName}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <button onClick={handleAddLink}>Link</button>
        <button onClick={handleSaveDraft}>Save Draft ⬇️</button>
        {/* <button onClick={handleLoadDraft}>Load Draft</button> */}
      </div>
      <div
        className={styles.editor}
        ref={editorRef}
        contentEditable={true}
        style={{ textAlign: "left" }}
      />
      <div>Selected Color: {color}</div>
      <div>Selected Font: {font}</div>
      <div>
        Images:
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              style={{ width: "100px", height: "100px" }}
              alt={`Image ${index}`}
            />
            <input
              type="number"
              value={image.width}
              onChange={(e) => {
                const newWidth = parseInt(e.target.value);
                const updatedImages = [...images];
                updatedImages[index].width = newWidth;
                setImages(updatedImages);
              }}
            />
            <input
              type="number"
              value={image.height}
              onChange={(e) => {
                const newHeight = parseInt(e.target.value);
                const updatedImages = [...images];
                updatedImages[index].height = newHeight;
                setImages(updatedImages);
              }}
            />
            <input
              type="text"
              placeholder="Anchor Link"
              value={image.anchorLink}
              onChange={(e) => {
                const newLink = e.target.value;
                const updatedImages = [...images];
                updatedImages[index].anchorLink = newLink;
                setImages(updatedImages);
              }}
            />
            <button onClick={() => handleImageDelete(index)}>Delete</button>
            <button
              onClick={() =>
                handleAddImage(
                  image.url,
                  image.width,
                  image.height,
                  image.anchorLink
                )
              }
            >
              Insert
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
