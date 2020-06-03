import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import App from "../components/app";

const IndexPage = () => {
  const [name, setName] = useState("next"); // 함수형 컴포넌트에서 state를 선언하는 방식
  const handleChange = (e) => {
    setName(e.target.value); // input의 value로 set state
  };

  return (
    <>
      <input onChange={handleChange}></input>
      <App
        data={name} // props를 전달
      />
      <Link href="/">
        <p>로그인하기</p>
      </Link>
      <button onClick={() => Router.push("/signin")}>로그인하기</button>
    </>
  );
};

export default IndexPage;
