import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [searchValue, setSearchValue] = useState(""); // Add state for search value

  return (
    <>
      <Navbar setSearchValue={setSearchValue} />
      <Home searchValue={searchValue} />
    </>
  );
}

export default App;
