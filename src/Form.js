import "./Form.css";
import { useState } from "react";
const Form = () => {
  const [isclicked, setIsclicked] = useState(false);
  const [formData, setFormData] = useState({
    name: " ",
    uid: " ",
    email: " ",
    year: " ",
    branch: " ",
    emphasis: " ",
    specialisation: " ",
    exprience: " ",
  });
  const {
    name,
    uid,
    email,
    year,
    branch,
    emphasis,
    specialisation,
    exprience,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

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
            <form className="registration" onSubmit={handleSubmit}>
              <div className="re1">
                <label>Name</label>
                <input
                  className="name"
                  autoFocus
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <label>Uid</label>
                <input
                  autoFocus
                  id="uid"
                  value={uid}
                  type="text"
                  placeholder="UID"
                  onChange={handleChange}
                ></input>
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="yearSelector">
                <div>
                  <label>Study_Year</label>
                  <label>{" Branch"}</label>
                </div>
                <div>
                  <select
                    id="year"
                    value={year}
                    name="year"
                    onChange={handleChange}
                  >
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                  </select>
                  <input
                    className="Branch"
                    type="text"
                    id="branch"
                    value={branch}
                    placeholder="Branch"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="Empasis">
                  <div>
                    <label>What Emphasised you about ADC </label>
                    <textarea
                      rows="4"
                      cols="29"
                      type="text"
                      id="emphasis"
                      value={emphasis}
                      placeholder="What Emphasised you about ADC"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <label>Specialization </label>
                    <input
                      type="text"
                      id="specialisation"
                      value={specialisation}
                      placeholder="Specialization"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div>
                    <label>Experience (if any)</label>
                    <input
                      type="text"
                      id="exprience"
                      value={exprience}
                      placeholder="Experience"
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
              </div>
              <button className="finalRegister" type="submit">
                REGISTER
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
