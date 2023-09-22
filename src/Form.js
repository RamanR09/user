import "./Form.css";
import { useState } from "react";
const Form = () => {
  const [isclicked, setIsclicked] = useState(false);

  return (
    <div className="mainForm">
      <button
        className="registerButton"
        onClick={() => {
          setIsclicked((prev) => !prev);
        }}
      >
        REGISTER ME
      </button>
      <div>
        {isclicked && (
          <div className="formDiv">
            <form className="registration">
              <div className="re1">
                <label>Name</label>
                <input
                  className="name"
                  autoFocus
                  type="text"
                  placeholder="Name"
                />
                <label>Uid</label>
                <input autoFocus type="text" placeholder="UID"></input>
                <label>Email</label>
                <input type="text" placeholder="Email"></input>
              </div>
            </form>
            <div className="yearSelector">
              <div>
                <label>Study_Year</label>
                <label>{" Branch"}</label>
              </div>
              <div>
                <select id="year" name="year">
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                </select>
                <input
                  className="Branch"
                  type="text"
                  placeholder="Branch"
                ></input>
              </div>
              <div className="Empasis">
                <div>
                  <label>What Emphasised you about ADC </label>
                  <textarea
                    rows="4"
                    cols="29"
                    type="text"
                    placeholder="What Emphasised you about ADC"
                  ></textarea>
                </div>
                <div>
                  <label>Specialization </label>
                  <input type="text" placeholder="Specialization"></input>
                </div>
                <div>
                  <label>Experience (if any)</label>
                  <input type="text" placeholder="Experience"></input>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
