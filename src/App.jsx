import "./App.css";
// import { TodoWrapper } from "./components/TodoWrapper.jsx";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage.jsx";

function App() {
  return (
    <>
      <div className="app bg-[#F0D8B8] cursor-pointer lg:flex lg:justify-center lg:items-center lg:min-h-screen">
        <TodoWrapperLocalStorage />
      </div>
    </>
  );
}

export default App;
