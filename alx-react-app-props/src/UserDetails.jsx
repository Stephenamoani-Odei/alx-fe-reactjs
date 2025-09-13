import {useContext} from "react";
import UserContext from "./UserContext.js";

function UserDetails() {
  const useData =useContext(UseContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;