//css imports
import "./App.css";

//componts imports
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
//import Home from "./pages/Home/Home";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="app-wrapper">
      {/* common header for all pages*/}
      <Header
        color="light"
        light={true}
        expand="md"
        container="md"
        fixed="top"
      />
      <div style={{ marginTop: "5rem" }}></div>
    
     <MainRoutes/>
      <Footer />
    </div>
  );
}

export default App;
