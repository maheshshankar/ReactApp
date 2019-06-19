import React from "react";
import Loader from "./hoc/loader";

const ListData = ({ userList, removeUser, details }) => {
  const trData = userList.map(user => {
    // if (user.id > 5) {
    //   return (
    //     <tr key={user.id}>
    //       <td>{user.id}</td>
    //       <td>{user.name}</td>
    //       <td>{user.username}</td>
    //       <td>{user.email}</td>
    //       <td>{user.company.name}</td>
    //     </tr>
    //   );
    // } else {
    //   return null;
    // }
    return user.id > 0 ? (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              details(user.id);
            }}
          >
            View
          </button>
          <button
            type="button"
            className="btn btn-danger ml-2"
            onClick={() => {
              removeUser(user.id);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    ) : null;
  });
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{trData}</tbody>
    </table>
  );
};

export default Loader(ListData);
