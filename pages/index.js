import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Folders from "../components/Folders";
import Modals from "../components/Modals";
import useLocalFolders from '../utils/useLocalFolders'


export default function Home() {
  const [folders, setFolders] = useLocalFolders();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Folders folders={folders} setFolders={setFolders} />
      <Modals setFolders={setFolders} folders={folders} />
    </div>
  );
}
