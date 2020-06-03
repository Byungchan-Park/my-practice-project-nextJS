// pages/index.js 내에 있는 컴포넌트
// 전달받은 props를 컴포넌트 내에서 호출

const App = (props) => {
  return (
    <div>
      <h1>Hello {props.data}</h1>
    </div>
  );
};

export default App;
