import React from "react";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AccountInfo from "./Components/Account Info/AccountInfo";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
