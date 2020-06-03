import Router from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";

const SigninPage = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const handleChangeInput = (name, value) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(userInfo);
    getUserInfo(userInfo);
  };

  const getUserInfo = (data) => {
    Axios({
      url: "https://tutorial.team-everywhere.com/api/user/signIn",
      method: "post",
      data: data,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        console.log("logined");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo({
      ...userInfo,
      id: storage.id,
    });
  }, []);

  return (
    <div className="wrapper login-wrapper">
      <form className="form login-form">
        <h1 className="title">SIGN IN</h1>
        <div className="inputGroup">
          <input
            type="text"
            name="id"
            className="login"
            autoComplete="off"
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="id" className="loginLabel">
            Id
          </label>
        </div>
        <div className="inputGroup">
          <input
            type="password"
            name="password"
            className="login"
            autoComplete="off"
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
            required
          />
          <label htmlFor="password" className="loginLabel">
            Password
          </label>
        </div>
        <div className="btnGroup">
          <input
            type="button"
            value="Signup"
            className="btn"
            onClick={() => Router.push("/signup")}
          />
          <input
            type="button"
            value="Login"
            className="btn"
            onClick={() => handleSubmit()}
          />
        </div>
        <a href="#" className="forgetPassWord">
          Forget password?
        </a>
      </form>
    </div>
  );
};

export default SigninPage;
