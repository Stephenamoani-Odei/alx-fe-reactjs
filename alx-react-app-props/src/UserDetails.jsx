import { useContext} from "react";
import UserContext from "..src/Context/UserContext"; 
function UserDetails({ userData }) {
    const userData=(useContext)
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;