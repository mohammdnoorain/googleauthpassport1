import { Link } from "react-router-dom";
import useAppContext from "../contextapi/UseContextApi";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };


 
  const navigate = useNavigate();
  const {login,setLogin}=useAppContext();
  const {user,setUser}=useAppContext();
  
  

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            
            <div>gello</div>
         
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;