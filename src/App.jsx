import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";

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
      <div style={{ marginTop: "100px" }}>Some content</div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
