import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import Home from "./pages/Home.jsx";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Privacy" element={<Privacy />}></Route>
          <Route path="/Terms" element={<Terms />}></Route>
          <Route path="/Forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
