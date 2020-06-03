import Router from "next/router";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
    sex: "",
    age: "",
    errors: {
      id: "",
      password: "",
      name: "",
      email: "",
      age: "",
    },
  });

  // the event callback function happens when input value changes
  const handleChangeInput = (name, value) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // check the validation of inputs in a form
  const validateInput = (name, value) => {
    let errors = userInfo.errors;
    let idRegx = RegExp(/^[a-z]+[a-z0-9]{5,19}$/g);
    let emailRegx = RegExp(
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    );
    let nameRegx = RegExp(/^[가-힣]{1,4}$/); // 한글 이름

    switch (name) {
      case "id":
        errors.id = idRegx.test(value)
          ? ""
          : "Id must start with english letters and numbers and from 6 letters to 20 letters";
        break;

      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;

      case "name":
        errors.name = nameRegx.test(value)
          ? ""
          : "Name must be Korean letter and from 2 letters to 5 letters";
        break;

      case "email":
        errors.email = emailRegx.test(value) ? "" : "Email is not valid!";
        break;

      case "age":
        errors.age =
          value < 1 || value === null ? "Age must be more than 0." : "";
        break;

      default:
        break;
    }
  };

  const handleClick = (e) => {
    setUserInfo({
      ...userInfo,
      sex: e.target.value,
    });
  };

  // the event callback function happens when clicks signup button
  const handleSubmit = () => {
    if (validateForm(userInfo.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    saveUserInfo(userInfo);
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  const saveUserInfo = (data) => {
    axios({
      url: "https://tutorial.team-everywhere.com/api/user",
      method: "post",
      data: data,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        console.log("Sign up Complete");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrapper signup-wrapper">
      <div className="form signup-form">
        <header>
          <h2 className="title">Sign up</h2>
          <p className="subtitle">
            Don't have an account? Let's go ahead and get you signed up.
          </p>
        </header>
        <main>
          <form className="signup-information">
            {/* id input */}
            <div className="field">
              <h3 className="inputTitle">ID</h3>
              <input
                required
                type="text"
                className="signup-input"
                id="idInput"
                name="id"
                onChange={(e) => {
                  handleChangeInput(e.target.name, e.target.value);
                  validateInput(e.target.name, e.target.value);
                }}
                noValidate
                autoComplete="off"
              />
              <label htmlFor="idInput">ID</label>
              {userInfo.errors.id.length > 0 && (
                <span className="error">{userInfo.errors.id}</span>
              )}
            </div>

            {/* password input */}
            <div className="field">
              <h3 className="inputTitle">Password</h3>
              <input
                required
                type="password"
                className="signup-input"
                id="pwdInput"
                name="password"
                onChange={(e) => {
                  handleChangeInput(e.target.name, e.target.value);
                  validateInput(e.target.name, e.target.value);
                }}
                noValidate
                autoComplete="off"
              />
              <label htmlFor="pwdInput">******</label>
              {userInfo.errors.password.length > 0 && (
                <span className="error">{userInfo.errors.password}</span>
              )}
            </div>

            {/* name input */}
            <div className="field">
              <h3 className="inputTitle">Username</h3>
              <input
                required
                type="text"
                className="signup-input"
                id="nameInput"
                name="name"
                onChange={(e) => {
                  handleChangeInput(e.target.name, e.target.value);
                  validateInput(e.target.name, e.target.value);
                }}
                noValidate
              />
              <label htmlFor="nameInput">Username</label>
              {userInfo.errors.name.length > 0 && (
                <span className="error">{userInfo.errors.name}</span>
              )}
            </div>

            {/* email input */}
            <div className="field">
              <h3 className="inputTitle">Email</h3>
              <input
                required
                type="email"
                className="signup-input"
                id="emailInput"
                name="email"
                onChange={(e) => {
                  handleChangeInput(e.target.name, e.target.value);
                  validateInput(e.target.name, e.target.value);
                }}
                noValidate
              />
              <label htmlFor="emailInput">email@example.com</label>
              {userInfo.errors.email.length > 0 && (
                <span className="error">{userInfo.errors.email}</span>
              )}
            </div>

            {/* gender input */}
            <div className="field">
              <h3 className="inputTitle">Gender</h3>
              <span className="gender__male">
                <input
                  type="radio"
                  name="sex"
                  value="0"
                  onClick={handleClick}
                />{" "}
                Male
              </span>
              <span className="gender__female">
                <input
                  type="radio"
                  name="sex"
                  value="1"
                  onClick={handleClick}
                />{" "}
                Female
              </span>
            </div>

            {/* age input */}
            <div className="field">
              <h3 className="inputTitle">Age</h3>
              <input
                required
                type="number"
                className="signup-input"
                id="ageInput"
                name="age"
                onChange={(e) => {
                  handleChangeInput(e.target.name, e.target.value);
                  validateInput(e.target.name, e.target.value);
                }}
              />
              <label htmlFor="ageInput">AGE</label>
              {userInfo.errors.age.length > 0 && (
                <span className="error">{userInfo.errors.age}</span>
              )}
            </div>
          </form>
        </main>
        <footer>
          <div className="field">
            <input type="checkbox" name="terms" />
            <label>I agree to the Terms and Conditions</label>
          </div>
          <div className="actions">
            <input
              type="button"
              name="commit"
              value="Sign up"
              className="btn signup-btn"
              onClick={() => {
                Router.push("/signin");
                handleSubmit();
              }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
