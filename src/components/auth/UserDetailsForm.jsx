/* eslint-disable react/prop-types */
import { useState } from "react";
function UserDetailsForm({ htmlFor, label, type, placeholder, id }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        value={input}
        onChange={handleChange}
      />
    </>
  );
}

export default UserDetailsForm;
