import { useRef, useState } from "react";

const BasicForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [isValidLastname, setIsValidLastname] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [lastnameTouched, setLastnameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const nameRef = useRef("");
  const lnameRef = useRef("");
  const emailRef = useRef("");

  const nameBlurHandler = () => {
    setNameTouched(true);
    if (nameRef.current.value.trim() === "") {
      setIsValid(false);
      return;
    }
    setNameTouched(false);
  };

  const lnameBlurHandler = () => {
    setLastnameTouched(true);
    if (lnameRef.current.value.trim() === "") {
      setIsValidLastname(false);
      return;
    }
    setLastnameTouched(false);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
    if (!emailRef.current.value.includes("@")) {
      setIsValidEmail(true);
      return;
    }
    setEmailTouched(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const nameInputIsInvalid = !isValid && nameTouched;
  const lnameInputIsInValid = !isValidLastname && lastnameTouched;
  const emailInputIsInValid = isValidEmail && emailTouched;
  
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lnameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            name="fname"
            type="text"
            id="fname"
            ref={nameRef}
            onBlur={nameBlurHandler}
          />
          {nameInputIsInvalid && (
            <p style={{ color: "red" }}>Поле не должно быть пустым *</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            name="lname"
            type="text"
            id="lname"
            ref={lnameRef}
            onBlur={lnameBlurHandler}
          />
          {lnameInputIsInValid && (
            <p style={{ color: "red" }}>Поле не должно быть пустым *</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInValid && (
          <p style={{ color: "red" }}>Заполните email адрес *</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
