import { useState, useCallback } from "react";
import { TargetBox } from "./dnd-components/TargetBox";
import { FileList } from "./dnd-components/FileList";

const DndContainer = ({setNewFile,newFile}) => {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const handleFileDrop = useCallback(
    (item) => {
      if (item) {
        const files = item.files;
        setDroppedFiles(files);
        setNewFile({...newFile,name:files[0].name})
      }
    },
    [setDroppedFiles],
  );
  return (
    <>
      <TargetBox onDrop={handleFileDrop} />
      <FileList files={droppedFiles} setNewFile={setNewFile} newFile={newFile}/>
    </>
  );
};
export default DndContainer