import { useState, useEffect } from "react";
import * as foldersFromJson from "../folders.json";

function useLocalFolders() {
    const [state, setState] = useState([]);
 /*  CUSTOM HOOKS FOR FOLDERS DATA */
    useEffect(() => {
        let foldersInLocal = [];
        /* IF LOCALSTORAGE IS EMPTY, i PUT SOME WITH THE fOLDERS.JSON FILE */
    if (!localStorage.getItem("folders")) {
      foldersFromJson.default.forEach((f) => {
        foldersInLocal.push(f);
      });
      localStorage.setItem("folders", JSON.stringify(foldersInLocal));
    }
/* IF LOCALSTORAGE IS NOT EMPTY? I PUT "FOLDERS" ITEM IN STATE */
      if (localStorage.getItem("folders")) {
         JSON.parse(localStorage.getItem("folders")).forEach((newFolder) => {
          setState((state)=>[...state,newFolder]);
        });
      }
    }, []);
    return [state, setState];
  }


export default useLocalFolders