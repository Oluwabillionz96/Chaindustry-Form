import React from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AccountInfo from "./Components/Account Info/AccountInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountInfo />} />
      </Routes>
    </>
  );
};

export default App;
