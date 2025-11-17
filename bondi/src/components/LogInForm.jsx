import { useEffect, useState } from "react";
import "../css/signUp.css";
import axios  from 'axios';

function LogInForm() {
    //retrieving the input from the user
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');


    //handling default submit
  const handleSubmit = (e) => {
    e.preventDefault(); 

  };

  


  const LoginData = async()=>{
    try {
        let response = await axios.post('api/user/login/',{
             email,
             password
         });

         if(response.status = 200){
            console.log(response.data)
         }else {
            throw new Error('could not send data')
         }
        
    } catch (error) {
        console.log(error)
        
    }
  }




  return (
    <div className="form-container">
      <h2 className="form-title">Sign in to Bondi</h2>

      <form className="business-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Enter your password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="submit-btn" onClick={()=>LoginData()}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LogInForm;
