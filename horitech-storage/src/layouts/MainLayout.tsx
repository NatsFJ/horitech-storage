import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>

      <Sidebar/>
      
      <Outlet/>
    </div>
  );
}
export default MainLayout;
