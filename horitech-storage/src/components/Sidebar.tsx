import {Link} from "react-router-dom"


function Sidebar() {
  return (
    <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/estoque">Estoque</Link>
    <Link to="/solicitacoes">Solicitações</Link>
    </div>
  );
}

export default Sidebar;
