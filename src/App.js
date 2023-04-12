import "./components/PersonCard"
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      
        <PersonCard 
        firstname={"Kevin"} 
        lastname={"Cantrell"}
        age={34} 
        hair_color={"Brown"} />
        
        <PersonCard 
        firstname={"Jhon"} 
        lastname={"Doe"}
        age={35} 
        hair_color={"Brown"} />
        
        <PersonCard 
        firstname={"Chris"} 
        lastname={"Cambell"}
        age={38} 
        hair_color={"Black"} />
        
        <PersonCard 
        firstname={"brian"} 
        lastname={"Rees"}
        age={25} 
        hair_color={"red"} />
        
        <PersonCard 
        firstname={"helen"} 
        lastname={"perez"}
        age={43} 
        hair_color={"grey"} />
    </div>
);
}
export default App;
