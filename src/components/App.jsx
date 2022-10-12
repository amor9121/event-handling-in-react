import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  // 1.Name
  // const [name, setName] = useState("");
  // 2.fullName
  // const [fName, setfName] = useState("");
  // const [lName, setlName] = useState("");
  // const [fullName, setFullName] = useState({
  //   fName:"",
  //   lName:""
  // });
  // 3.Contact

  const [contact, setContact] = useState({
    fName:"",
    lName:"",
    email:""
  })

  // 1.Name
  // function handleClick(event) {
  //   setHeadingText("Hello, " + name);
  // } 
  // 2. fullName
  // function handleClick(event) {
  //   setHeadingText("Hello, " + fullName.fName + " "+ fullName.lName);
  //   event.preventDefault(); //for Form submitted
  // }
  // 3.Contact  

  function handleClick(event) {
    setHeadingText("Hello, " + contact.fName + " "+ contact.lName + contact.email);
    event.preventDefault(); 
  }  
  // 1.Name
  // function handleChange(event) {
  //   setName(event.target.value);
  // }
  // 2. fullName1
  //   function handleChange(event) {
  //   const newValue= event.target.value;
  //   const inputName = event.target.name;
  //   if(inputName === "fName"){
  //     setFullName({fName:newValue});
  //   }else if (inputName === "lName"){
  //     setFullName({lName:newValue});
  //   }
  //   setFullName(preValue => {
  //     if(inputName === "fName"){
  //         return{
  //           fName:newValue,
  //           lName:preValue.lName
  //         };
  //       }else if (inputName === "lName"){
  //         return{
  //           fName:preValue.fName,
  //           lName:newValue
  //         };
  //     }
  //   })
  // }
  // 2. fullName2 
  // function handleChange(event) {
  //   const {value, name} = event.target;

  //   setFullName(preValue => {
  //     if(name === "fName"){
  //         return{
  //           fName:value,
  //           lName:preValue.lName
  //         };
  //       }else if (name === "lName"){
  //         return{
  //           fName:preValue.fName,
  //           lName:value
  //         };
  //     }
  //   })
  // }
  
  // 3. Contact 
  function handleChange(event) {
    const {value, name} = event.target;

    setContact(preValue => {
      if(name === "fName"){
          return{
            fName:value,
            lName:preValue.lName,
            email:preValue.email
          };
      }else if (name === "lName"){
        return{
          fName:preValue.fName,
          lName:value,
          email:preValue.email
        };
      }else if (name === "email"){
        return{
          fName:preValue.fName,
          lName:preValue.lName,
          email:value
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
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          type="text"
          placeholder="What's your last name?"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="What's your email?"
          value={contact.email}
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
