function UserDetailsForm({htmlFor,label,type,placeholder,id}) {
  return (
    <>
        <label htmlFor={htmlFor}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} />
    </>
  )
}



export default UserDetailsForm