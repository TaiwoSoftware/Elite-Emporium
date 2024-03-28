import UserDetailsForm from "./UserDetailsForm";
function RegisterForm() {
  return (
    <>
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
    </>
  );
}

export default RegisterForm;
