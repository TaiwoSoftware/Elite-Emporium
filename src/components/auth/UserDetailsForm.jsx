/* eslint-disable react/prop-types */
function UserDetailsForm({
  htmlFor,
  label,
  type,
  placeholder,
  id,
  inputs,
  handleChange,
}) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        required
        placeholder={placeholder}
        value={inputs}
        onChange={handleChange}
      />
    </>
  );
}

export default UserDetailsForm;
