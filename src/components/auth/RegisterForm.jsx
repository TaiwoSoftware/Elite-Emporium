import { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
function RegisterForm({ registerValue, registerHandleChange }) {
  const [nameInput, SetNameInput] = useState('')
  const [emailInput, SetEmailInput] = useState('')
  const [telInput, SetTelInput] = useState('')
  const [passwordInput, SetPasswordInput] = useState('')
  return (
    <>
      <UserDetailsForm
        htmlFor="name"
        label="Name:"
        type="text"
        placeholder="John doe"
        id="name"
        handleChange={registerHandleChange}
        value={registerValue}

      />
      <UserDetailsForm
        htmlFor="email"
        label="Email Address"
        type="email"
        placeholder="johndoe@gmail.com"
        id="email"
        handleChange={registerHandleChange}
        value={registerValue}
      />
      <UserDetailsForm
        htmlFor="tel"
        label="Phone Number"
        type="tel"
        placeholder="+234"
        id="tel"
        handleChange={registerHandleChange}
        value={registerValue}
      />
      <UserDetailsForm
        htmlFor="password"
        label="Password"
        type="password"
        placeholder="xxxxxxxx"
        id="password"
        handleChange={registerHandleChange}
        value={registerValue}
      />
    </>
  );
}

export default RegisterForm;
