import { useState } from "react";
import DndContainer from "./DndContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Modals = ({
  setFolders,
  folders,
  setCurrentFolder,
  currentFolder,
  selectedFile,
}) => {
  const [newFile, setNewFile] = useState({
    _id: Math.floor(Math.random() * 100000),
    name: "",
    lastModification: new Date().toISOString().slice(0, 10),
    author: "",
  });
  const { name, author } = newFile;
  const [folderToPutTheFile, setFolderToPutTheFile] = useState();

  const saveNewFolder = (e) => {
    e.preventDefault();
    const newFolder = document.getElementById("newFolder").value;
    const authorName = document.getElementById("authorName").value;

    const folder = {
      _id: Math.floor(Math.random() * 100000),
      name: newFolder,
      author: authorName,
      files: [],
      lastModification: new Date().toISOString().slice(0, 10),
    };

    const foldersFromLocal = JSON.parse(localStorage.getItem("folders"));
    /* UPDATING THE FOLDERS LIST AND SAVE IT THE LOCALSTORAGE */
    const foldersInLocal = [];
    if (foldersFromLocal === null) {
      foldersInLocal.push(folder);
      setFolders((folders) => [...folders, folder]);
    } else {
      foldersFromLocal.forEach((f) => {
        foldersInLocal.push(f);
      });
      foldersInLocal.push(folder);
      setFolders((folders) => [...folders, folder]);
    }
    localStorage.setItem("folders", JSON.stringify(foldersInLocal));
  };

  const handleChange = (name) => (e) => {
    setNewFile({ ...newFile, [name]: e.target.value });
  };

  const handleFolder = (e) => {
    e.preventDefault();
    setFolderToPutTheFile({ _id: parseInt(e.target.value) });
  };

  const saveNewFile = (e) => {
    e.preventDefault();
    let foldersFromLocal = JSON.parse(localStorage.getItem("folders"));

    if (folderToPutTheFile !== undefined) {
      const folderToUpdate = foldersFromLocal.find(
        (folder) => folder._id === folderToPutTheFile._id,
      );
      /* UPDATING THE FOLDER TO PUT THE NEW FILE */
      folderToUpdate.files.push(newFile);
      localStorage.setItem("folders", JSON.stringify(foldersFromLocal));
      setFolders(foldersFromLocal);
      if (currentFolder && currentFolder._id === folderToUpdate._id) {
        setCurrentFolder(folderToUpdate);
      }
    }
  };

  const moveFile = (idFile) => (e) => {
    e.preventDefault();
    let files = [];
    /* DELETE THE FILE OF THE CURRENT FOLDER */
    currentFolder.files.forEach((fF) => {
      if (fF._id !== idFile) {
        files.push(fF);
      }
    });
    currentFolder.files = files;

    let foldersInLocal = [];

    folders.forEach((f) => {
      if (f._id !== currentFolder._id) {
        foldersInLocal.push(f);
        setFolders((folders) => [...folders, f]);
      }
      if (f._id === currentFolder._id) {
        foldersInLocal.push(currentFolder);
        setFolders((folders) => [...folders, currentFolder]);
      }
    });
    /* ADD THE FILE TO THE SELECTED FOLDER */
    if (folderToPutTheFile !== undefined) {
      const folderToUpdate = foldersInLocal.find(
        (folder) => folder._id === folderToPutTheFile._id,
      );
      folderToUpdate.files.push(selectedFile);
      localStorage.setItem("folders", JSON.stringify(foldersInLocal));
      setFolders(foldersInLocal);
    }
  };

  return (
    <>
      {/* FOLDERS ADD MODAL */}
      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal1-label"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal1-label">
                Nouveau Dossier
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="newFolder">Nouveau dossier</label>
                <input
                  className="form-control"
                  id="newFolder"
                  type="text"
                  placeholder="Nom du nouveau dossier"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="authorName">Auteur</label>
                <input
                  className="form-control"
                  id="authorName"
                  type="text"
                  placeholder="Nom de l'auteur"
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={saveNewFolder}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FILES ADD MODAL*/}
      <div
        className="modal fade"
        id="modal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal2-label"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-label">
                Nouveau Fichier
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group mb-4">
                <DndProvider backend={HTML5Backend}>
                  <DndContainer setNewFile={setNewFile} newFile={newFile} />
                </DndProvider>
              </div>
              <div className="form-group">
                <label htmlFor="newFileAuthorInput">Nom de l'auteur</label>
                <input
                  className="form-control"
                  onChange={handleChange("author")}
                  value={author}
                  id="newFileAuthorInput"
                  type="text"
                  placeholder="Nom de l'auteur"
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="folder">Dossier</label>
                <select
                  id="folder"
                  onChange={handleFolder}
                  className="form-control"
                >
                  <option value="" selected>
                    Veuillez choisir un dossier
                  </option>
                  {folders &&
                    folders.map((f, i) => {
                      return (
                        <option value={f._id} key={i}>
                          {f.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={saveNewFile}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                disabled={
                  folderToPutTheFile === undefined ||
                  (folderToPutTheFile && folderToPutTheFile._id === "") ||
                  newFile.name === ""
                }
              >
                Enregistrer le fichier
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* FILES SHIFTING MODAL*/}
      <div
        className="modal fade"
        id="modal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal1-label"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {selectedFile && (
                <h5 className="modal-title" id="modal1-label">
                  Fichier {`${selectedFile.name}`}
                </h5>
              )}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="newFolder">Déplacer vers:</label>
                <select
                  id="newFolder"
                  onChange={handleFolder}
                  className="form-control"
                >
                  <option value="" selected>
                    Veuillez choisir un dossier
                  </option>
                  {folders &&
                    folders.map((f, i) => {
                      return (
                        <option value={f._id} key={i}>
                          {f.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              {selectedFile && (
                <button
                  type="button"
                  onClick={moveFile(selectedFile._id)}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Déplacer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modals;
