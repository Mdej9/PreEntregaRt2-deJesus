import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Banner/>
      <Footer/> 
    </>
  )
}

export default App;
