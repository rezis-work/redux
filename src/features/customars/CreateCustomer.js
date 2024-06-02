import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomar } from "./customarSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

  function restoreInputs() {
    setFullName("");
    setNationalId("");
  }

  function handleClick() {
    if (!fullName || !nationalId) alert("pls fill up fullname and national ID");
    dispatch(createCustomar(fullName, nationalId));
    restoreInputs();
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
