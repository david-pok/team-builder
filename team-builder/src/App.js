import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

import roster from "./dummyData";

function App() {
  const [team, setTeam] = useState(roster);
  // console.log("teamState", team);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  };
  // console.log("teamState", team);

  return (
    <div className="App">
      <ul>
        Current Roster:
        {team.map(member => (
          <li key={member.id}>{member.name}: {member.role}</li>
        ))}
      </ul>
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
