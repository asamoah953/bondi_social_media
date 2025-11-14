import { useState } from 'react';
import '../css/signUp.css'

function LogInForm() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    console.log(email)

    return (
        <div className="form-container">
            <h2 className="form-title">Sign in to Bondi</h2>

            <form className="business-form">
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete
                    />
                </div>
                <div className="form-group">
                    <label for='password'>Enter your password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='true'
                    />
                </div>
                <button className="submit-btn">Signin</button>
            </form>
        </div>
    )
}




export default LogInForm;