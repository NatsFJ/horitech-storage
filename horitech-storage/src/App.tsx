import Solicitações from "./pages/Solicitações"
import Estoque from "./pages/Estoque"
import Dashboard from "./pages/Dashboard"
import {Routes, Route, Navigate} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"


function App() {
  return (
    <div>
      <h1>Horitech Storage</h1>
      <p>Sistema de gerenciamento de estoque</p>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard"/>}/>
        <Route element={<MainLayout/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/solicitacoes" element={<Solicitações />} />
        <Route path="/estoque" element={<Estoque/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App  