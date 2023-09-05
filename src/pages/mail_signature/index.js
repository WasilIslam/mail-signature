import React, { useEffect, useState } from "react";
import { Input, Button, Card, Row, Col } from "antd";
import { CopyOutlined, DownloadOutlined } from "@ant-design/icons";
import { card1 } from "../../functions/cards/cards";
import { copyRichText, copyTextToClipboard } from "@/functions/clipboard";
import { captureAndDownloadElementById } from "@/functions/2image";
import Two from "./2";

function DynamicInputs() {
  const initialInputList = {
    "Full name": { id: 0, label: "Full name", value: "Muhammad Wasil Islam" },
    Title: { id: 1, label: "Title", value: "Software Engineer" },
    Company: { id: 2, label: "Company", value: "Cuthours" },
    Mobile: { id: 3, label: "Mobile", value: "+923101457770" },
    Website: { id: 4, label: "Website", value: "www.cuthours.com" },
    Address: { id: 5, label: "Address", value: "Shalimar Link Road, Lahore" },
  };
  const [inputFile, setInputFile] = useState(null);
  const [inputList, setInputList] = useState(initialInputList);
  const [formData, setFormData] = useState({});
  const [content, setContent] = useState(null);

  const handleInputChange = (label, event) => {
    const newList = { ...inputList };
    newList[label].value = event.target.value;
    setInputList(newList);

    // Update formData
    const newFormData = { ...formData };
    newFormData[label] = event.target.value;
    setFormData(newFormData);
  };

  const handleAddInput = () => {
    // Implementation for adding input (if needed)
  };

  const handleRemoveInput = (label) => {
    const newInputList = { ...inputList };
    newInputList[label].value = "";
    setInputList(newInputList);

    // Update formData
    const newFormData = { ...formData };
    delete newFormData[label];
    setFormData(newFormData);
  };

  const handleCopy = () => {
    const card_elem = document.getElementById("card").innerHTML;
    // copyTextToClipboard(card_elem);
    copyRichText("card");
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        setInputFile(base64);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDownload = () => {
    captureAndDownloadElementById("card");
  };

  useEffect(() => {
    setContent(
      card1({
        ...inputList,
        "Profile Pic": { value: inputFile },
      })
    );
    document.getElementById("card").innerHTML = card1({
      ...inputList,
      "Profile Pic": { value: inputFile },
    });
  }, [inputList, inputFile]);
  return (
    <div style={{ padding: "20px", display: "flex", gap: 10 }}>
      <Card title="Your Information" style={{ width: "30%" }}>
        <Row gutter={[16, 16]}>
          <Col span={18}>
            <input type="file" onChange={handleFileChange} />
          </Col>
        </Row>
        {Object.values(inputList).map((input) => (
          <Row gutter={[16, 16]} key={input.id} style={{ marginTop: 30 }}>
            <Col span={18}>
              <Input
                value={input.value}
                onChange={(event) => handleInputChange(input.label, event)}
                placeholder={input.label}
              />
            </Col>
            <Col span={6}>
              <Button onClick={() => handleRemoveInput(input.label)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))}
        <Row gutter={[16, 16]}>
          <Col span={24}>
            {/* <Button type="dashed" onClick={handleAddInput} block>
              Add Input
            </Button> */}
          </Col>
        </Row>
      </Card>
      <Card
        title="Card"
        extra={
          <div>
            <Button icon={<CopyOutlined />} onClick={handleCopy}>
              Copy
            </Button>
            <Button icon={<DownloadOutlined />} onClick={handleDownload}>
              Download
            </Button>
          </div>
        }
      >
        {/* Content of the card */}
        <Two content={content} />
        <hr />
        <b>Final Output</b>
        <div id="card"></div>
      </Card>
    </div>
  );
}

export default DynamicInputs;
