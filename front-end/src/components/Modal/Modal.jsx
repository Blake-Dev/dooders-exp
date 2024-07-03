/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";

import "./Modal.css";

function Modal({ isOpen, setIsOpen }) {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  const handleAgeInput = e => {
    setAge(e.target.value);
  }

  const handleNameInput = e => {
    setName(e.target.value);
  }

  const addDoods = () => {
    console.log('name: ', name);
    console.log('age: ', age);
    const response = fetch('http://127.0.0.1:8000/dooders', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age: parseInt(age),
      })
    });

    console.log('resp: ', response)

    setIsOpen(false)
  };

  if (isOpen) {
    return (
      <div className="Modal">
        <div className="Modal-container">
          <div className="Modal-content">
            <h3>Add Dooders</h3>
            <p>Tell us about your doods!</p>
            <form className="Modal-form">
              <div>
                <label className="Modal-label" htmlFor="name">
                  Name
                </label>
                <input type="text" name="name" placeholder="Name" id="name" onChange={handleNameInput} />
              </div>
              <div>
                <label className="Modal-label" htmlFor="age">
                  Age
                </label>
                <input type="number" name="age" placeholder="Age" id="age" onChange={handleAgeInput} />
              </div>
            </form>
          </div>
        </div>
        <div className="Modal-footer">
          <Button color="red" text="Close" onClick={() => setIsOpen(false)} />
          <Button color="blue" text="Save" onClick={addDoods} />
        </div>
      </div>
    );
  }
}

export default Modal;
