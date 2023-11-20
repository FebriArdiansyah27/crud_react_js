import React from "react";

const Table = ({ list, setList }) => {
  return (
    <table className="table-fixed shadow-lg rounded-lg min-h-[200px] mx-auto mt-10">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, idx) => {
          return (
            <tr>
              <td key={item.id}>{item.id} </td>
              <td key={item.id}> {item.fName} </td>
              <td key={item.id}> {item.lName} </td>
              <td key={item.id}>{item.deleteButton}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
