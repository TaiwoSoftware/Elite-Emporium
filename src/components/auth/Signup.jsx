import SignUpImage from "../assets/UI/icons-and-images/sign-in-image.png";
import UserDetailsForm from "./UserDetailsForm";
function SignUp() {
  return (
    <div className="sign">
      <div className="sign-image-style">
        <img src={SignUpImage} alt="Sign-up-image" />
        <div className="image-details">
          <div className="sign-up-header">
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
        <div className="toggle">
          <div className="switch">
            <p>Sign Up</p>
          </div>
          <div className="switchLog">
            <p>Log In</p>
          </div>
        </div>

        <form>
          <UserDetailsForm
            htmlFor="name"
            label="Name:"
            type="text"
            placeholder="John doe"
            id="name"
          />
          <UserDetailsForm
            htmlFor="email"
            label="Email Address"
            type="email"
            placeholder="johndoe@gmail.com"
            id="email"
          />
          <UserDetailsForm
            htmlFor="tel"
            label="Phone Number"
            type="tel"
            placeholder="+234"
            id="tel"
          />
          <UserDetailsForm
            htmlFor="password"
            label="Password"
            type="password"
            placeholder="xxxxxxxx"
            id="password"
          />

          <div className="buttons">
            <button className="signButton" type="submit">
              Sign Up
            </button>
            <p className="orText">or</p>
            <button className="google">Continue with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
