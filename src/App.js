import "./App.css";
import Header from "./header";
import Components from "./components";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Components></Components>
      <Form></Form>
      <form className="Form">
        <label>NAME</label>
        <input className="Personal" type="text"></input>
      </form>
    </div>
  );
}

export default App;
