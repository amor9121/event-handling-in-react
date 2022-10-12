import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  // const [name, setName] = useState("");
  // const [fName, setfName] = useState("");
  // const [lName, setlName] = useState("");
  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });


  function handleClick(event) {
    // setHeadingText("Hello, " + name);
    setHeadingText("Hello, " + fullName.fName + " "+ fullName.lName);
    event.preventDefault(); //for Form submitted
  }  

  // function handleChange(event) {
  //   setName(event.target.value);
  // }

  // function handleFNameChange(event) {
  //   setfName(event.target.value);
  // }

  // function handleLNameChange(event) {
  //   setlName(event.target.value);
  // }

  function handleChange(event) {
    // const newValue= event.target.value;
    // const inputName = event.target.name;

    const {value, name} = event.target;

    // if(inputName === "fName"){
    //   setFullName({fName:newValue});
    // }else if (inputName === "lName"){
    //   setFullName({lName:newValue});
    // }

    // setFullName(preValue => {
    //   if(inputName === "fName"){
    //       return{
    //         fName:newValue,
    //         lName:preValue.lName
    //       };
    //     }else if (inputName === "lName"){
    //       return{
    //         fName:preValue.fName,
    //         lName:newValue
    //       };
    //   }
    // })
    setFullName(preValue => {
      if(name === "fName"){
          return{
            fName:value,
            lName:preValue.lName
          };
        }else if (name === "lName"){
          return{
            fName:preValue.fName,
            lName:value
          };
      }
    })
  }
 
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        {/* <input
          onChange={handleFNameChange}
          type="text"
          placeholder="What's your first name?"
          value={fName}
        />
        <input
          onChange={handleLNameChange}
          type="text"
          placeholder="What's your last name?"
          value={lName}
        /> */}
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="What's your first name?"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="What's your last name?"
          value={fullName.lName}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
