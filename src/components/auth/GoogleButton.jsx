import { FcGoogle } from "react-icons/fc"
function GoogleButton() {
  return (
    <>
      <p className="orText">or</p>
      <button className="google">
        <FcGoogle className="google-icon" />
        Continue with Google
      </button>
    </>
  );
}

export default GoogleButton;
