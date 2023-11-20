import { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Table from "./components/table";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div className="container text-center text-black bg-white h-[70vh] rounder-lg shadow-xl mx-auto p-10 mt-10 mb-5 ">
      <Header />
      <Input list={list} setList={setList} />
      <Table list={list} setList={setList} />
    </div>
  );
};
export default App;
