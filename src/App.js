import { useState } from "react";
import Nav from "./Nav";
import Overview from "./Overview";


function App() {
  const [isActive, setIsActive] = useState(false)

  const activeStateHandler = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="App min-h-screen w-full md:grid md:grid-cols-[20%_80%]">
      <Nav isActive={isActive} changeActiveState={activeStateHandler} />
      <Overview changeActiveState={activeStateHandler} />
    </div>
  );
}

export default App;
