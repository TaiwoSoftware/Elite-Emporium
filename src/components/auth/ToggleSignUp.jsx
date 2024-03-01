/* eslint-disable react/prop-types */
function ToggleSignUp({ switchDetails, switchStyle, switchP }) {
  return (
    <>
      <div className={switchStyle}>
        <p>{switchDetails}</p>
      </div>
      <p>{switchP}</p>
    </>
  );
}

export default ToggleSignUp;
