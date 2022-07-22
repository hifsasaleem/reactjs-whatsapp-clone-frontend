import "./App.css";
import SideBar from "./Components/Sidebar";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <h1>WHATS APP CLONE REACT JS FRONTEND</h1>
      <div className="appBody">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
