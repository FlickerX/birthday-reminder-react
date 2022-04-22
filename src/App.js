import React, {useState, useEffect} from "react";
import {uuid} from "uuidv4";
import AddPerson from "./components/AddPerson";
import Header from "./components/Header";
import PersonList from "./components/PersonList";


function App() {
  const [name,setName] = useState("");
  const [age, setAge] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const [persons, setPersons] = useState([]);
  
  useEffect (() => {
    getLocalPersons();
  }, []);

  useEffect(() => {
    saveLocalPerosons();
  }, [persons]);

  const saveLocalPerosons = () => {
      localStorage.setItem("persons", JSON.stringify(persons));
  };

  const getLocalPersons = () => {
    if(localStorage.getItem("persons") === null){
      localStorage.setItem("persons", JSON.stringify([]));
    }else{
      let personLocal = JSON.parse(localStorage.getItem("persons"));
      setPersons(personLocal);
    }
  }
  return (
    <div className="ui-container">
      <Header />
      <AddPerson 
      setName = {setName}
      setAge = {setAge}
      persons = {persons}
      name = {name}
      age = {age}
      day = {day}
      month = {month}
      setDay = {setDay}
      setPersons = {setPersons}
      setMonth = {setMonth}
      />
      <PersonList
      persons = {persons}
      setPersons = {setPersons}/>
    </div>
  );
}

export default App;
