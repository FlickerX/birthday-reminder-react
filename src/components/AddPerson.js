import React from "react";
import Dropdown from "./Dropdown"
import { useState } from "react";
const AddPerson = ({setName, setAge, persons, setPersons, name, age,
    day, setDay, month, setMonth}) => {

    const [selected, setSelected] = useState("");

    setMonth(selected);
    const nameHandler = (e) => {
        setName(e.target.value);
    };
    const oldHandler = (e) => {
        setAge(e.target.value);
    };
    const dayHandler = (e) => {
        setDay(e.target.value);
    };
    const submitPersonHandler = (e) => {
        if(name === ""){
            e.preventDefault();
            alert("PLEASE INPUT NAME!");
        }
        else if(age === ""){
            e.preventDefault();
            alert("PLEASE INPUT AGE!");
        }
        else if(day === ""){
            e.preventDefault();
            alert("PLEASE INPUT DAY!");
        }
        else if(day < 1 || day > 31){
            e.preventDefault();
            alert("PLEASE INPUT EXISTING DAY!");
        }
        else if(month === "Choose Month"){
            e.preventDefault();
            alert("PLEASE CHOOSE MONTH!");
        }
        else{
            e.preventDefault();
            setMonth("0");
            setMonth(selected);
            setPersons([
                ...persons, {personName: name, 
                    personAge: age, 
                    personBirthDay: day,
                    personBirthMonth: month,
                    id:Math.random() * 1000}
            ]);
            setName("");
            setAge("");
            setDay("");
            setMonth("");
        }
        
    }

    return(
        <div className="l-form">
            <form className="form">
                <h1 className="form_title">Sign Up</h1>
                <div className="form_div">
                    <input 
                    type="text"
                    className="form_input"
                    placeholder=" "
                    value= {name}
                    onChange={nameHandler}
                    />
                    <label
                    for = ""
                    className="form_label">Name</label>
                </div>
                <div className="form_div">
                    <input 
                    type="number"
                    className="form_input"
                    placeholder=" "
                    value={age}
                    onChange={oldHandler}
                    />
                    <label
                    for = ""
                    className="form_label">Age</label>
                </div>
                <div className="form_div">
                    <input 
                    type="number"
                    className="form_input"
                    placeholder=" "
                    value = {day}
                    onChange={dayHandler}/>
                    <label
                    for = ""
                    className="form_label">Day</label>
                </div>
                <div className="form_div">
                    <Dropdown
                    value = {month}
                    selected = {selected} 
                    setSelected = {setSelected}/>
                </div>
                <input type="submit" 
                onClick={submitPersonHandler}
                className = "submit-button" value = "Submit"></input>
            </form>
        </div>
    );
}

export default AddPerson;