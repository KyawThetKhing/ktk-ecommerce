import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addUserList } from "../../redux/apiCalls";
import "./newUser.css";

export default function NewUser() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = e => {
    setInput(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addUserList(dispatch, input);
    history.push("/users");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="john"
          />
        </div>
        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div> */}
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>Is Admin?</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            id="active"
            onClick={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
