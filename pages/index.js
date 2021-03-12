import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Folders from "../components/Folders";
import Modals from "../components/Modals";
import { useState, useEffect } from "react";
import * as foldersFromJson from "../folders.json";

export default function Home() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
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
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Folders folders={folders} setFolders={setFolders} />
      <Modals setFolders={setFolders} folders={folders} />
    </div>
  );
}
