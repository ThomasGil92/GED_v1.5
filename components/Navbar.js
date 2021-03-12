import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
      <Link className="navbar-brand col-2" href="/">
        <h4 style={{cursor:"pointer"}}>GED</h4>
      </Link>
      <div className="input-group my-2 my-lg-0 col-6 ml-5">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un dossier ou un fichier"
          aria-label="Rechercher un dossier ou un fichier"
          aria-describedby="button-addon4"
        />
        <div className="input-group-append" id="button-addon4">
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Rechercher
          </button>{" "}
        </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
