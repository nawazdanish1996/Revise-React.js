import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Four from "./lifeCycleMethod/Four";

// Life Cycle Method
import One from "./lifeCycleMethod/One";
import Three from "./lifeCycleMethod/Three";
import Two from "./lifeCycleMethod/Two";

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <FunctionalComponent />
      <ClassComponent />
      <h1>Hooks</h1>
      <h1>Life-Cycle Method</h1>
      <One />
      <Two />
      <Three />
      <Four />
    </div>
  );
}

export default App;
