import Nav from "./Nav";
import Overview from "./Overview";


function App() {
  return (
    <div className="App min-h-screen grid grid-cols-[20%_80%]">
      <Nav />
      <Overview />
    </div>
  );
}

export default App;
