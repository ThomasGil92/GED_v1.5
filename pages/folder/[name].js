import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as foldersFromJson from "../../folders.json";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Files from "../../components/Files";
import Modals from "../../components/Modals";

const Folder = () => {
  const router = useRouter();
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState([]);
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (!router.isReady) return;

    let foldersInLocal = [];
    if (!localStorage.getItem("folders")) {
      foldersFromJson.default.forEach((f) => {
        foldersInLocal.push(f);
      });
      localStorage.setItem("folders", JSON.stringify(foldersInLocal));
    }

    if (localStorage.getItem("folders")) {
      JSON.parse(localStorage.getItem("folders")).forEach((newFolder) => {
        setFolders((folders) => [...folders, newFolder]);
        if (newFolder.name.toLowerCase() === router.query.name) {
          setCurrentFolder(newFolder);
        }
      });
    }
  }, [setFolders, router.isReady]);
  return (
    <>
      {currentFolder.name ? (
        <>
          <Navbar />
          <Sidebar />
          <Files
            folder={currentFolder}
            setFolder={setCurrentFolder}
            folders={folders}
            setFolders={setFolders}
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
          <div className="col-10 offset-2 h-100 pt-5 mt-5 text-center"><h3>Aucun dossier portant le nom de <i>{`${router.query.name}`}</i></h3></div>
        </>
      )}
    </>
  );
};
export default Folder;
