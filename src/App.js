import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Reminders from "./components/Reminders/Reminders";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Reminders />
    </div>
  );
}

export default App;
