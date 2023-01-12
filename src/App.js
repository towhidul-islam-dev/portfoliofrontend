import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  Navbar,
  Time,
  AuthContextProvider,
  Resume,
  Allskills
} from "./container/index";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="allskills" element={<Allskills />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
