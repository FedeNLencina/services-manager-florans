import { Route, Routes } from "react-router";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
