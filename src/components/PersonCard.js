import React from "react";
import {FaTrash} from "react-icons/fa"
import {FaRegEdit} from "react-icons/fa"
import user from "../images/user.png"

const PersonCard = ( {personName,person, personAge, personBirthDay, personBirthMonth, id, persons, setPersons} ) => {
    const d = new Date();
    let currentYear = d.getFullYear();
    let currentMonth = d.getMonth() + 1;
    let currentDay = d.getDate();
    
    let daysTillBirhday;

    personBirthMonth = Number(personBirthMonth) + Number(1);//Because its robs one
    personAge = Number(personAge);

    const birthMonth = personBirthMonth < 10 ? "0" + personBirthMonth :personBirthMonth;
    const birthDay = personBirthDay < 10 ? "0" + personBirthDay : personBirthDay;
    
    const newYearDate = new Date(currentYear+"-12-31");
    const newYearFirstDayDate = new Date((currentYear + 1)+"-01-01");

    const birthday = new Date(currentYear + "-" + birthMonth + "-" + birthDay);

    if(d.toDateString() === birthday.toDateString()){
        personAge += 1;
    }

    if((birthMonth < currentMonth) || ((personBirthMonth === currentMonth) && (birthDay < currentDay))){
        const birthday = new Date((currentYear + 1) + "-" + birthMonth + "-" + birthDay);
        daysTillBirhday = Math.round(((newYearDate - d) + (birthday - newYearFirstDayDate)) / 1000 / 3600 / 24 + 1); // Plus one because of 01-01 counts one smaller
    }
    else
        daysTillBirhday = Math.round((birthday - d) / 1000 / 3600 / 24);


    const deleteHandler = () => {
        setPersons(persons.filter(el => el.id !== person.id))
    }
    return(
        <div className="item">
            <img className="avatar-image" src={user}/>
            <div className="content">
                <div className="name-output">{personName}</div>
                <div className="age-output">{personAge} Years</div>
            </div>
            <div className="time-left">
                <span className="days-till-birthday">{daysTillBirhday} Days Till Birthday</span>
            </div>
            <div className="icons">
                <FaRegEdit 
                className = "editIcon"/>
                <FaTrash     
                onClick={deleteHandler}       
                className = "trashIcon"/>
            </div>
             
        </div>
    );
}

export default PersonCard;