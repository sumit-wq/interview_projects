import { useState } from "react";
import { IFolder } from "../../constants/data";
import "./styles.css";

interface IProps {
  explorer: IFolder;
}

function Folder({ explorer }: IProps) {
  const [expandFolder, setExpandFolder] = useState(false);

  const handleExpand = () => {
    setExpandFolder(!expandFolder);
  };

  const renderFolder = (expand: IFolder) => {
    return (
      <div className="folderConatiner">
        <div className="folder" onClick={handleExpand}>
          <span>
            📁
            {expand.name}
          </span>
          {/* <span
            onClick={() => handleInserNode(expand, true, showInput, "edit")}
          >
            {"✍🏻"}
          </span>
          <span
            onClick={() => handleInserNode(expand, false, showInput, "add")}
          >
            {"Add 📃"}
          </span>
          <span onClick={() => handleInserNode(expand, true, showInput, "add")}>
            {"Add 📁 "}
          </span>
          <span onClick={() => handleInserNode(expand, true, showInput, "del")}>
            {"X"}
          </span> */}
        </div>
        <div
          style={{
            display: expandFolder ? "block" : "none",
            paddingLeft: 24
          }}
        >
          {expandFolder &&
            expand.items.map((data: IFolder, idx) => {
              return <Folder key={data.id} explorer={data} />;
            })}
        </div>
      </div>
    );
  };
  const renderFiles = (expand: IFolder) => {
    return (
      <div className="filesContainer">
        <span onClick={handleExpand}>
          <span role="img">{"📃"}</span> {expand.name}
          {/* <span
            onClick={() => handleInserNode(expand, false, showInput, "edit")}
          >
            {"✍🏻"}
          </span>
          <span onClick={() => handleInserNode(expand, true, showInput, "del")}>
            {"X"}
          </span> */}
        </span>
      </div>
    );
  };
  return (
    <>
      {explorer.isFolder && renderFolder(explorer)}
      {!explorer.isFolder && renderFiles(explorer)}
    </>
  );
}

export default Folder;
