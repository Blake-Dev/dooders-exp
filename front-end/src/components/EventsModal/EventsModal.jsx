/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";

import "../Modal/Modal.css";

function Modal({ isOpen, setIsOpen }) {
  const [selectedType, setSelectedType] = useState("pee");
  const [notes, setNotes] = useState("");

  const handleNotesInput = (e) => {
    setNotes(e.target.value);
  };

  const addEvent = () => {
    console.log("selectedType: ", selectedType);
    console.log("notes: ", notes);
    const response = fetch("http://127.0.0.1:8000/add_event", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: selectedType,
        notes,
      }),
    });

    console.log("resp: ", response);

    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div className="Modal">
        <div className="Modal-container">
          <div className="Modal-content">
            <h3>Add Event</h3>
            <p>Tell us what happened!</p>
            <form className="Modal-form">
              <div>
                <label className="Modal-label" htmlFor="type-select">
                  Event Type
                </label>
                <select
                  id="type-select"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="pee">Pee</option>
                  <option value="poop">Poop</option>
                  <option value="potty">Potty (Both)</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  <option value="walk">walk</option>
                </select>
              </div>
              <div>
                <label className="Modal-label" htmlFor="notes">
                  Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="notes"
                  id="notes"
                  onChange={handleNotesInput}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="Modal-footer">
          <Button color="red" text="Close" onClick={() => setIsOpen(false)} />
          <Button color="blue" text="Save" onClick={addEvent} />
        </div>
      </div>
    );
  }
}

export default Modal;
