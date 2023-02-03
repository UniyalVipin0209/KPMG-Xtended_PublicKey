import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <header className="kpmg-header">
        <main
          style={{
            fontFamily: "lotto",
            fontSize: "1.84rem",
            color: "white",
          }}
        >
          KPMG- Extended Public Key
        </main>
      </header>
      <div className="row">
        <div className="col"></div>
      </div>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col-12 p-4">
          <section>
            <div className="col-12">
              <InputForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
