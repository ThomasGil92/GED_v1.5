import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as foldersFromJson from "../../folders.json";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Files from "../../components/Files";
import Modals from "../../components/Modals";
import useFile from "../../utils/useFile";
import useLocalFolders from "../../utils/useLocalFolders";

const Folder = () => {
  const router = useRouter();
  const [folders, setFolders] = useLocalFolders();
  const [currentFolder, setCurrentFolder] = useFile();
  const [selectedFile, setSelectedFile] = useState();

  return (
    <>
       {currentFolder.name ? (
      <>
        <Navbar />
        <Sidebar />

        <Files
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
           setFolders={setFolders}
            folders={folders}
          setSelectedFile={setSelectedFile}
        />
        <Modals
          folders={folders}
          setFolders={setFolders}
          setCurrentFolder={setCurrentFolder}
          currentFolder={currentFolder}
          selectedFile={selectedFile}
        />
      </>
       ) : (
        <>
          <Navbar />
          <Sidebar />
          <div className="col-10 offset-2 h-100 pt-5 mt-5 text-center">
            <h3>
              Aucun dossier portant le nom de <i>{`${router.query.name}`}</i>
            </h3>
          </div>
        </>
      )}
    </>
  );
};
export default Folder;
