import * as React from "react";
import Home from "./pages/home/Home";
import TopBar from "./componenets/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Sidebar from "./componenets/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Home />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/register" element={user ? <Home /> : <Register />}/>
      <Route path="/login" element={user ? <Home /> : <Login />}/>
      <Route path="/post/:id" element={<Single />} />
      <Route path="/write" element={user ? <Write /> : <Login />}/>
      <Route path="/settings" element={user ? <Setting /> : <Login />}/>
    </Routes>
  </Router>
  );
}

export default App;
