// import Google from "../img/google.png";
// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAppContext from "../contextapi/UseContextApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const {login,setLogin}=useAppContext();
  const {user,setUser}=useAppContext();
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  

  
  // useEffect(()=>{

  //   if(!login){
  //   navigate("/login")

  //   }
  // },[])

  //   const github = () => {
  //     window.open("http://localhost:5000/auth/github", "_self");
  //   };

  //   const facebook = () => {
  //     window.open("http://localhost:5000/auth/facebook", "_self");
  //   };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/loginwithcredential", { email, password },  { withCredentials: true })
      .then((res) => {
        console.log("hey",res);
        if(res.data.success){
          navigate("/admin");
        }
        else  {

          navigate("/login");
        }
      //  else if (res.data.success === true)
          // alert(res.data.token);
        //   window.sessionStorage.setItem("token", res.data.token);
        // const userType = res.data.user.user_type;
        // setLogin(true)
        
        

       
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            {/* <img src={Google} alt="" className="icon" /> */}
            Google
          </div>
          {/* <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div> */}
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form >
        <div className="right">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}   
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="submit" type="submit" onClick={handleSubmit}>Login</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
