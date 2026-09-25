import Sidebar from "./components/Sidebar"
import Estoque from "./pages/Estoque"
import Dashboard from "./pages/Dashboard"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <h1>Horitech Storage</h1>
      <p>Sistema de gerenciamento de estoque</p>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estoque" element={<Estoque/>} />
      </Routes>
    </div>
  )
}

export default App  