import Link from "next/link";

const Folders = ({ folders, setFolders }) => {
  const deleteFolder = (idFolder) => (e) => {
    e.preventDefault();
    console.log(idFolder);
    const newFoldersList = [];
    folders.forEach((f) => {
      if (f._id !== idFolder) {
        newFoldersList.push(f);
      }
    });
    localStorage.setItem("folders", JSON.stringify(newFoldersList));
    setFolders(newFoldersList);
    console.log(newFoldersList);
  };

  return (
    <div className="col-10 offset-2 h-100 pt-5 mt-5">
      <h5>Dossiers</h5>
      <div className="col-12 py-3 d-flex border-bottom text-dark">
        <div className="col-6">Nom du dossier</div>
        <div className="col-2 font-weight-light">Dernière modification</div>
        <div className="col-2 font-weight-light">Créateur</div>
        <div className="col-2 font-weight-light">Action</div>
      </div>
      {folders &&
        folders.map((f, i) => {
          return (
            <div
              key={i}
              className="col-12 d-flex py-4 border-bottom custom-font-bold text-secondary"
            >
              <div className="col-6 pl-0 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-folder-fill folder-icon-color-1 mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                </svg>
                <Link href={`/folder/${f.name.toLowerCase()}`}>{f.name}</Link>
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
                        onClick={deleteFolder(f._id)}
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
                        <div className="mx-auto">Supprimer dossier</div>
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
export default Folders;
