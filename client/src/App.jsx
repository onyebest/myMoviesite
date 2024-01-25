import React from "react";
import Watch from "./pages/watch/Watch";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
