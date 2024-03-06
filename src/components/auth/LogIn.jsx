import CheckboxInput from "./CheckboxInput";
import UserDetailsForm from "./UserDetailsForm";
function LogIn() {
  return (
    <>
      <UserDetailsForm
        htmlFor="email"
        label="Email Address"
        type="email"
        placeholder="johndoe@gmail.com"
        id="email"
      />
      <UserDetailsForm
        htmlFor="password"
        label="Password"
        type="password"
        placeholder="xxxxxxxx"
        id="password"
      />
      <CheckboxInput />
    </>
  );
}

export default LogIn;
