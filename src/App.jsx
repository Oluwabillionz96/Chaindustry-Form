import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import AccountInfo from "./Pages/Account Info/AccountInfo";

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
