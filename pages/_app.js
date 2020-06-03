import React from "react";
import App from "next/app";
import "../static/styles/styles.scss";

class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  // 1. layout 유지
  // 2. state(상태) 유지하면서 navigating
  // 3. componentDidCatch => 에러핸들링
  // 4. 페이지들에 데이터 추가 (cf. GraphQL queries)

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
