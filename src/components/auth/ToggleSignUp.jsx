/* eslint-disable react/prop-types */
function ToggleSignUp({ switchDetails, switchStyle, switchP, secondSwitch }) {
  return (
    <>
      <div className="toggle">
        <div className={switchStyle}>
          <p>{switchDetails}</p>
        </div>
        <div className={secondSwitch}>
          <p>{switchP}</p>
        </div>
      </div>
    </>
  );
}

export default ToggleSignUp;
