import "./App.css";
import InputForm from "./components/InputForm";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <section>
            <div className="col-12">
              <InputForm />
            </div>
          </section>
        </div>
        <div className="col-4"></div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
