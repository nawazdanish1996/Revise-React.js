import "./App.scss";
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent";
import CustomHooks from "./hooks/customHooks";

// Life Cycle Method

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      <h1>Hooks</h1>
      <CustomHooks />
      <h1>Life-Cycle Method</h1>

    </div>
  );
}

export default App;
