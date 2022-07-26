import {Routes, BrowserRouter,Route,Navigate}  from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard'


const PrivateRoute = ({ children, redirectTo }) => {
    //const isAuthenticated = localStorage.getItem("token") !== null;
    const isAuthenticated=false;
    console.log("isAuth: ", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

export default function AllRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>} />

          <Route path='/dashboard' element={ <PrivateRoute redirectTo="/"> <Dashboard/> </PrivateRoute>} />
        </Routes>
        </BrowserRouter>
    )
}