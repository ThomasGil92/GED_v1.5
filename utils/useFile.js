import { useState, useEffect } from "react";
import * as foldersFromJson from "../folders.json";
import { useRouter } from "next/router";

function useFile() {
  const router = useRouter();
  const [currentFolder, setCurrentFolder] = useState([]);

  /*  CUSTOM HOOKS FOR FILES IN FOLDERS DATA */
  useEffect(() => {
    if (!router.isReady) return;

    let foldersInLocal = [];
    /* IF LOCALSTORAGE IS EMPTY, i PUT SOME WITH THE fOLDERS.JSON FILE */
    if (!localStorage.getItem("folders")) {
      foldersFromJson.default.forEach((f) => {
        foldersInLocal.push(f);
      });
      localStorage.setItem("folders", JSON.stringify(foldersInLocal));
    }

    if (localStorage.getItem("folders")) {
      /* IF LOCALSTORAGE IS NOT EMPTY, I PUT "FOLDERS" ITEM IN STATE */
      JSON.parse(localStorage.getItem("folders")).forEach((newFolder) => {
        /* IF A FOLDER HAVE THE SAME NAME AS Router.QUERY.NAME, I SET THIS FOLDER AS THE CURRENT FOLDER TO DISPLAY HIS FILES */
        if (newFolder.name.toLowerCase() === router.query.name) {
          setCurrentFolder(newFolder);
        }
      });
    }
  }, [router.isReady]);
  return [currentFolder, setCurrentFolder];
}

export default useFile;
