/* eslint-disable react/prop-types */
function SubmitButton({ buttonValue }) {
  return (
    <>
      <button className="signButton" type="submit">
        {buttonValue}
      </button>
    </>
  );
}

export default SubmitButton;
