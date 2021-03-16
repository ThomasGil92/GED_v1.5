import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useLocalFolders from "../utils/useLocalFolders";
import Result from "../components/search-result/Result";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [folders, setFolders] = useLocalFolders();
  const [foldersResult, setFoldersResult] = useState();
  const [filesResult, setFilesResult] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    /* FIND FOLDERS WITH QUERY VALUE */
    if (folders) {
      const filteredFolders = folders.filter((folder) => {
        return folder.name
          .toLowerCase()
          .includes(router.query.searchTerms.toLowerCase());
      });
      /* FIND FILES WITH QUERY VALUE */
      const filteredFiles = [];
      folders.filter((folder) => {
        folder.files.forEach((file) => {
          if (
            file.name
              .toLowerCase()
              .includes(router.query.searchTerms.toLowerCase())
          ) {
            filteredFiles.push({ file, folder });
          }
        });
      });

      if (filteredFolders.length !== 0) {
        setFoldersResult(filteredFolders);
      }

      if (filteredFiles.length !== 0) {
        setFilesResult(filteredFiles);
      }
    }
  }, [router.isReady]);
  return (
    <div>
      <Navbar />
      <Sidebar buttonDisplay={false}/>
      <Result
        setFoldersResult={setFoldersResult}
        setFilesResult={setFilesResult}
        foldersResult={foldersResult}
        filesResult={filesResult}
      />
    </div>
  );
}
