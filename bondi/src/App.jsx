import { Routes, Route } from 'react-router-dom';
import AppLayOut from './applicationLayout/appLayout';
import AuthLayOut from './applicationLayout/authLayout';
import SignUp from './pages/signUp';
import LogIn from './pages/login';
import Home from './pages/home';
import UserHome from './pages/userHome';
import UserProfile from './pages/userProfile';
import Messages from './pages/messages';



const messages = [
  {
    id: 1,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 2,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 3,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 4,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 5,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 6,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 7,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 8,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 9,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 10,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 11,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 12,
    name: 'Clinton',
    message: 'Hello',
  },
  {
    id: 13,
    name: 'Clinton',
    message: 'Hello',
  },
]



function App() {
  return (

    <>
      <Routes>

        <Route element={<AuthLayOut />}>
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />

        </Route>

        <Route element={<AppLayOut />}>

          <Route path='/' element={<UserHome />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/user-messages' element={<Messages messages={messages} />} />

        </Route>

      </Routes>






    </>
  )
}

export default App
