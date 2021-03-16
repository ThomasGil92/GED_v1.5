import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    setSearchTerms(e.target.value);
  };
/* INCLUDING THE VALUE TO RESEARCH IN THE URL */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerms !== "") {
      router.push(`/${searchTerms}`);
    }
  };

  return (
    <div className="input-group my-2 my-lg-0 col-6 ml-5">
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher un dossier ou un fichier"
        aria-label="Rechercher un dossier ou un fichier"
        aria-describedby="button-addon4"
        onChange={handleSearch}
      />
      <div className="input-group-append" id="button-addon4">
        <button
          onClick={handleSubmit}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Rechercher
        </button>{" "}
      </div>
    </div>
  );
};
export default SearchBar;
