import { Routes, Route } from 'react-router-dom';
import AppLayOut from './applicationLayout/appLayout';
import AuthLayOut from './applicationLayout/authLayout';
import SignUp from './pages/signUp';
import LogIn from './pages/login';
import Home from './pages/home';
import UserHome from './pages/userHome';







function App() {

  // let userPostContainer = [
  //   {
  //     key:1
  //   },
  // ]



  return (

    <>
      <Routes>

        <Route element={<AuthLayOut />}>
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />

        </Route>

        <Route element={<AppLayOut />}>
        <Route path='/' element={ <UserHome />} />
        </Route>
      </Routes>






    </>
  )
}

export default App
