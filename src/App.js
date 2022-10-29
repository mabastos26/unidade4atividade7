import Header from "./componentes/Header"
import Footer from "./componentes/Footer"
import Produtos from "./pages/Produtos"
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import "./globalStyles.css";


function App() {
  return (
    <div className="container-principal">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
