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
    reply: "Yeah how are you"

  },
  {
    id: 2,
    name: 'Asamoah',
    message: 'Hello How are',
    reply: "Yeah how are you"
  },
  {
    id: 3,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 4,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 5,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 6,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 7,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 8,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 9,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 10,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 11,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 12,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

  },
  {
    id: 13,
    name: 'Clinton',
    message: 'Hello',
    reply: "Yeah how are you"

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
