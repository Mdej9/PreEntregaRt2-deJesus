import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Hero/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Banner/>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App;
