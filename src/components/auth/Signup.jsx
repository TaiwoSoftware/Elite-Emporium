import SignUpImage from "../assets/UI/icons-and-images/sign-in-image.png";
import UserDetailsForm from "./UserDetailsForm";
function SignUp() {
  return (
    <div className="sign">
      <div className="sign-image-style">
        <img src={SignUpImage} alt="Sign-up-image" />
        <div className="image-details">
          <h2>Elite Emporium</h2>
          <p>elegance &amp; luxury</p>
          <h1>
            Ditch the labels, Dress <br />
            your vibe
          </h1>
        </div>
      </div>
      <div className="user-details">
        <div className="toggle">
          <p>Sign Up</p>
          <p>Log In</p>
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

          <button type="submit">Sign Up</button>
          <button>Continue with Google</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
