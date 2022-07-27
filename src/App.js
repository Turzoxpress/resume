import { About, Footer, Header, More, Skills, Work } from "./container/index";
import { Navbar } from "./components/index";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />
      <More />

      <Footer />
    </div>
  );
}

export default App;
