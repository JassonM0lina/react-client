import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import PrivateRoute from './utils/PrivateRoute';
import LoginRoute from './utils/LoginRoute';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Selection, Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import Login from './pages/Login.jsx';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { isLogin, setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    // eslint-disable-next-line no-console
    console.log(isLogin);
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                {isLogin ? <FiSettings /> : null}
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              { isLogin ? <Sidebar /> : null}
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              { isLogin ? <Sidebar /> : null}
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              { isLogin ? <Navbar /> : null}
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
              <AuthProvider>
                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={(<PrivateRoute />)}>
                    <Route index element={(<Ecommerce />)} />

                    {/* pages  */}
                    <Route path="selection" element={<Selection />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="employees" element={<Employees />} />
                    <Route path="customers" element={<Customers />} />

                    {/* apps  */}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/color-picker" element={<ColorPicker />} />

                    {/* charts  */}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                  </Route>
                  <Route path="/login" element={(<LoginRoute />)}>
                    <Route index element={<Login />} />
                  </Route>
                </Routes>
              </AuthProvider>
            </div>
            { isLogin ? <Footer /> : null}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
