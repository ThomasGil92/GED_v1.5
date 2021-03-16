import { useMemo } from "react";
function list(files) {
  const label = (file) => `${file.name}`;
  return files.map((file) => (
    <li className="list-group-item" key={file.name}>
      <h5>Nom du fichier</h5>
      {label(file)}
    </li>
  ));
}
export const FileList = ({ files }) => {
  if (files.length === 0) {
    return <div className="text-center mt-2">Veuillez déposer votre fichier</div>;
  }
  const fileList = useMemo(() => list(files), [files]);
  return <div>{fileList}</div>;
};
