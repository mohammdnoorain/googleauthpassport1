import React, { useState, useEffect } from "react";

import { AppContext } from "../contextapi/CreateContexAoi";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  console.log("khushi ram ");

  const getUser = async () => {
    console.log("ttttttuituig");
    try {
      const res = await axios.get("http://localhost:5000/auth/login/success", {
        withCredentials: true,
      });
      console.log("help", res);
      if (res.data.success === true) {
        console.log("okokokok", res.data);
        setLogin(true);
        setUser(res.data.user);
      } else {
        console.log("hoja bhai");
      }
    } catch (error) {
      console.error("Error fetching user:");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const values = {
    login,
    setLogin,
    user,
    setUser,
  };

useEffect(()=>{
console.log("oitch catalyst");


},[])
  return (
    <>
      <AppContext.Provider value={values}>{children}</AppContext.Provider>;
    </>
  );
};
export default ContextProvider;
