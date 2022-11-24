import logo from "./logo.svg";
import "./App.css";
import pdf from "./SkeletonDoc.pdf";
import { data } from "./data.js";
import Card from "./Card";
import GeneralInfoCard from "./GeneralInfoCard";
import FileIntegrationCard from "./FileIntegrationCard";

function App() {
  const onButtonClick = async () => {
    await sleep(3000);
    // using Java Script method to get PDF file
    fetch("SkeletonDoc.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SkeletonDoc.pdf";
        alink.click();
      });
    });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <div className="main flex-col">
      <img src={logo} height="60" width="auto"></img>
      <h1 className="heading">Integration Architecture Document Generation</h1>
      <div className="card">
        <div className="card-info">
          <div className="card-heading">Enter your parent codebase path:</div>
          <input type="text" placeholder="/your/codebase" required={true} />
        </div>
        <div className="card-info">
          <div className="card-heading">Enter name of your config file:</div>
          <input type="text" placeholder="config-file-name" required={true} />
        </div>
        <div className="card-info">
          <button
            type="submit"
            value="Generate Document"
            onClick={onButtonClick}
          >
            {/* <a href={pdf} target="_blank"> */}
            Generate Document
            {/* </a> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
