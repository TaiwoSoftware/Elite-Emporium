/* eslint-disable react/prop-types */
function SubmitButton({ buttonValue, handleClick }) {
  return (
    <>
      <button 
      onClick={handleClick}
      className="signButton" type="submit">
        {buttonValue}
      </button>
    </>
  );
}

export default SubmitButton;
