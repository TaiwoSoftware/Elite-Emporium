import { FcGoogle } from "react-icons/fc";
import leftLine from "../assets/UI/icons-and-images/Line 4.svg";
import rightLine from "../assets/UI/icons-and-images/Line 5.svg";
function GoogleButton() {
  return (
    <>
      <div className="lines-styles">
        <img src={rightLine} alt="right line" />
        <p className="orText">or</p>
        <img src={leftLine} alt="left line" />
      </div>

      <button className="google">
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>
    </>
  );
}

export default GoogleButton;
