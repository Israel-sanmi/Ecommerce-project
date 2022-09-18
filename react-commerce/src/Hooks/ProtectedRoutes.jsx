import React from "react";
import { Context } from "./ContextApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {auth} from './firebase'

const ProtectedRoutes = () => {
  const { setUser, setToken } = Context();
  const [myUser, load] = useAuthState(auth);

  useEffect(() => {
    if (myUser) {
      //    setUser(myUser.emai)
      setToken(myUser.accessToken);
    }
  }, [myUser]);
  if (load) {
    return <div>loading...</div>;
  }
  if (myUser) {
    return <Outlet />;
  }
  return <Navigate to="/signUp" />;
  return <div></div>;
};

export default ProtectedRoutes;
