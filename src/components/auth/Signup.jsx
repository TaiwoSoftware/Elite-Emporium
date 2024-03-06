import { useState } from "react";
import SignUpImage from "../assets/UI/icons-and-images/sign-in-image.png";
import RegisterForm from "./RegisterForm";
import LogIn from "./LogIn";
import GoogleButton from "./GoogleButton";
import SubmitButton from "./SubmitButton";
import ToggleSignUp from "./ToggleSignUp";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigator = useNavigate();
  const [isOnLogin, setIsOnLogin] = useState(true);
  const [toggleGoogleButton, setToggleGoogleButton] = useState(true);
  const homeClick = () => {
    navigator("/");
  };
  const handleClick = () => {
    setIsOnLogin(!isOnLogin);
    setToggleGoogleButton(!toggleGoogleButton);
  };
  return (
    <div className="sign">
      <div className="sign-image-style">
        <img src={SignUpImage} alt="Sign-up-image" />
        <div className="image-details">
          <div onClick={homeClick} className="sign-up-header">
            <h2>Elite Emporium</h2>
            <p>elegance &amp; luxury</p>
          </div>
          <div className="sign-up-lowerDetails">
            <h1>
              Ditch the labels, Dress <br />
              your vibe
            </h1>
          </div>
        </div>
      </div>
      <div className="user-details">
        <div onClick={handleClick}>
          {isOnLogin ? (
            <>
              <ToggleSignUp
                switchStyle="switch"
                switchDetails="Sign Up"
                secondSwitch="offSwitch"
                switchP="Log In"
              />
            </>
          ) : (
            <>
              <ToggleSignUp
                switchStyle="offSwitch"
                switchDetails="Sign Up"
                secondSwitch="switch"
                switchP="Log In"
              />
            </>
          )}
        </div>
        <form>
          {isOnLogin ? <RegisterForm /> : <LogIn />}
          <div className="buttons">
            {isOnLogin ? (
              <SubmitButton buttonValue="Sign up" />
            ) : (
              <SubmitButton buttonValue="Login" />
            )}
            {toggleGoogleButton && <GoogleButton />}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
