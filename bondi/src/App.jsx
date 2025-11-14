import { Router, Routes, Route } from 'react-router-dom';
import AppLayOut from './applicationLayout/appLayout';
import AuthLayOut from './applicationLayout/authLayout';
import SignUp from './pages/signUp';
import LogIn from './pages/login';
import Home from './pages/home';

function App() {

  return (

    <>
      <Routes>

        <Route element={<AuthLayOut />}>
          <Route path='/' element={ <Home/> }/>
          <Route path='/signup' element={ <SignUp /> }/>
          <Route path='login' element={ <LogIn /> }/>

        </Route>

        <Route element={<AppLayOut />}>

        </Route>
      </Routes>






    </>
  )
}

export default App
