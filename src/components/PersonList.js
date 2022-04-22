import React from "react";

import PersonCard from "./PersonCard";

const PersonList = ( {persons, setPersons} ) => {
    return(
        <div className="birthdaylist-container">
            {persons.map((person) => (
                <PersonCard
                key = {person.id} 
                personName = {person.personName}
                personAge = {person.personAge}
                personBirthDay = {person.personBirthDay}
                personBirthMonth = {person.personBirthMonth}
                id = {person.id}
                persons = {persons}
                setPersons = {setPersons}
                person = {person}
                />
            ))}
        </div>
    );
}

export default PersonList;