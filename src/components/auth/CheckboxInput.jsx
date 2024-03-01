const CheckboxInput = () => {
  return (
    <div className="keepAll">
      <div className="innerInput">
        <input type="checkbox" id="keep" />
        <p htmlFor="keep">Keep me Logged In</p>
      </div>
      <p>Forgot password?</p>
    </div>
  );
};

export default CheckboxInput;
