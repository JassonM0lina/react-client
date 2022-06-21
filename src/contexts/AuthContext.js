import { createContext, useState, useEffect, React } from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from './ContextProvider';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const { setIsLogin, setActiveMenu, isLogin } = useStateContext();
  const [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null));
  const [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null));
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      setIsLogin(true);
      setActiveMenu(true);
      localStorage.setItem('authTokens', JSON.stringify(data));
      navigate('/');
    } else {
      alert('Something went wrong!'); // eslint-disable-line no-alert
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authTokens');
    setUser(null);
    setAuthTokens(null);
    setIsLogin(null);
    setActiveMenu(null);
    navigate('/login');
  };

  // eslint-disable-next-line
  const contextData = {
    user,
    isLogin,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
