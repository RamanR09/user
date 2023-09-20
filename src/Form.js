import "./Form.css";
const Form = () => {
  return (
    <div className="formDiv">
      <div>
        <form className="registration">
          <div className="re1">
            <label>Name</label>
            <input className="name" autoFocus type="text" placeholder="Name" />
            <label>Uid</label>
            <input autoFocus type="text" placeholder="UID"></input>
            <label>Email</label>
            <input type="text" placeholder="Email"></input>
          </div>
        </form>
        <div className="yearSelector">
          <label>Study Year</label>
          <select id="year" name="year">
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
