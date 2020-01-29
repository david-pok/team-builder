import React, { useState } from "react";

const Form = props => {
  // console.log('form props', props)
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    // console.log("member", member);
    // console.log("e", e.target);
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="input name here"
        onChange={handleChanges}
        value={member.name}
      ></input>

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="input email here"
        onChange={handleChanges}
        value={member.email}
      ></input>

      <label htmlFor="role">Role:</label>
      <textarea
        id="role"
        type="text"
        name="role"
        placeholder="enter role here"
        onChange={handleChanges}
        value={member.role}
      ></textarea>
      <button type="Submit">Add Member</button>
    </form>
  );
};

export default Form;
