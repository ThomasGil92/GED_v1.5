const Files = ({ folder, setFolder, folders, setFolders, setSelectedFile }) => {
  const deleteFile = (idFile) => (e) => {
    e.preventDefault();
    let files = [];
    folder.files.forEach((fF) => {
      if (fF._id !== idFile) {
        files.push(fF);
      }
    });
    folder.files = files;
    let foldersInLocal = [];
    folders.forEach((f) => {
      if (f._id !== folder._id) {
        foldersInLocal.push(f);
        setFolders((folders) => [...folders, f]);
      }
      if (f._id === folder._id) {
        foldersInLocal.push(folder);
        setFolders((folders) => [...folders, folder]);
      }
    });
    localStorage.setItem("folders", JSON.stringify(foldersInLocal));
  };

  const setFile = (file) => (e) => {
    e.preventDefault();
    setSelectedFile(file);
  };

  return (
    <div className="col-10 offset-2 h-100 pt-5 mt-5">
      <h5>Fichiers</h5>
      <div className="col-12 py-3 d-flex border-bottom text-dark">
        <div className="col-6">Nom du Fichier</div>
        <div className="col-2 font-weight-light">Dernière modification</div>
        <div className="col-2 font-weight-light">Créateur</div>
        <div className="col-2 font-weight-light">Action</div>
      </div>
      {folder &&
        folder.files &&
        folder.files.map((f, i) => {
          return (
            <div
              key={i}
              className="col-12 d-flex py-4 border-bottom custom-font-bold text-secondary"
            >
              <div className="col-6 pl-0 d-flex">
                {" "}
               
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-file-earmark-fill folder-icon-color-1 mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                </svg>
                <div>{f.name}</div>
              </div>
              <div className="col-2 font-weight-light">
                {f.lastModification}
              </div>
              <div className="col-2 font-weight-light">{f.author}</div>
              <div className="col-2 font-weight-light">
                <div className="dropdown ">
                  <button
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-right custom-font-sidebar"
                    aria-labelledby="dropdownMenu1"
                  >
                    <li>
                      <a
                        href="#"
                        className="d-flex dropdown-item"
                        onClick={deleteFile(f._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-trash-fill folder-icon-color-1 mr-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                        <div className="mx-auto">Supprimer fichier</div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="d-flex dropdown-item"
                        data-toggle="modal"
                        data-target="#modal3"
                        onClick={setFile(f)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="19"
                          fill="currentColor"
                          className="bi bi-arrows-move folder-icon-color-1 mr-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"
                          />
                        </svg>
                        <div className="mx-auto">Déplacer fichier</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Files;
