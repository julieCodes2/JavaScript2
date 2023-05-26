import React from 'react';
import Person from "./Person";

function PersonList() {
    const persons = [
        { id: 1, name: "Julie", title: "Web Developer" },
        { id: 2, name: "Shannon", title: "Web Designer" },
        { id: 2, name: "Jim", title: "Engineer" },
    ];
    const personList = persons.map((person) => (
        // <h1 key={person.id}>
        // My friend {person.name} is a {person.title}
        // </h1>
        <Person key={person.id} person={person} />
    ));
  return <div>{personList}</div>;
}

export default PersonList;