import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tickets from "./components/Tickets";
import Contacts from "./components/Contacts";

function App() {

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gap: "2rem",
        backgroundColor: "#00bfff",
      }}>

      <Header/>

      <Hero/>

      <Tickets/>

      <Form/>

      <Contacts/>

    </div>
  );

}

export default App;
