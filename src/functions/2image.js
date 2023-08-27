import html2canvas from "html2canvas";

export function captureAndDownloadElementById(elementId, filename) {
  const elementToCapture = document.getElementById(elementId);

  if (elementToCapture) {
    html2canvas(elementToCapture).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = filename || "capturedImage.png";
      link.click();
    });
  }
}
