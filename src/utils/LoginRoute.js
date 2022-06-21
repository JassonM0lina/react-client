import { Navigate, Outlet } from 'react-router-dom';
import { React, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const LoginRoute = () => {
  const { isLogin } = useContext(AuthContext);
  // eslint-disable-next-line no-console
  console.log(isLogin);
  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default LoginRoute;

