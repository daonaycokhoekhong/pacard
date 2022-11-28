// import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Library from "./pages/library";
// import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
// import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Auth from "./pages/auth/Auth";
import Account from "./pages/account/Account";
import Geography from "./pages/geography";
import Practice from "./pages/practice/Practice"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar/calendar";

import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

const AppLayout = ({ user }) => user ? (
  <>
    <div className="app">
      <Sidebar/>
      <main className="content">
        <Topbar  />
        <Outlet/>
      </main>
    </div>
  </>
) : ( <Navigate to="/auth" replace /> );

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);
  const { user } = useContext(AuthContext);



  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
               <Route path="/" element={
                  <Navigate to="/auth" replace />
                }/>
                <Route path="/auth" element={
                  (!user ? <Auth/> : <Navigate to="/home" replace />)
                }/>
              <Route element={<AppLayout user = {user}/>} >
                <Route path="/" element={<Auth/>} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/team" element={<Team/>} />
                {/*<Route path="/contacts" element={<Contacts/>} />*/}
                <Route path="practice" element={<Practice />}/>
                <Route path="/library" element={<Library/>} />
                {/*<Route path="/form" element={<Form/>} />*/}
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/geography" element={<Geography/>} />
                <Route path="/account" element={<Account/>} />
              </Route>
            </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
