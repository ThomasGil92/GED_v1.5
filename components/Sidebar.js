import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <ul className="nav flex-column col-2 mx-auto px-2 mt-3">
        <Link href="/" passHref>
          <li
            className="nav-item border-bottom d-flex py-2"
            style={{ cursor: "pointer" }}
          >
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-folder-fill folder-icon-color-1"
                viewBox="0 0 16 16"
              >
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
              </svg>
              <div className="mx-auto custom-font-sidebar">Documents</div>
            </>
          </li>
        </Link>
        <li className="nav-item py-2">
          {" "}
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle w-100"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              + Nouveau
            </button>
            <ul
              className="dropdown-menu w-100 custom-font-sidebar"
              aria-labelledby="dropdownMenu1"
            >
              <li>
                <a
                  href="#"
                  className="d-flex dropdown-item"
                  data-toggle="modal"
                  data-target="#modal1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-folder-fill folder-icon-color-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                  </svg>
                  <div className="mx-auto">Nouveau dossier</div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex dropdown-item"
                  data-toggle="modal"
                  data-target="#modal2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-file-earmark-fill  folder-icon-color-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                  </svg>
                  <div className="mx-auto">Nouveau Fichier</div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      {/* MODAL */}
    </>
  );
};
export default Sidebar;
