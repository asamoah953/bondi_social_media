import { useState } from 'react';
import '../css/signUp.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUForm() {
    const [first_name, setFirstname] = useState('');
    const [second_name, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');

    const nav = useNavigate();

    // SIGNUP REQUEST
    const handleSubmitData = async (e) => {
        e.preventDefault(); // prevent page refresh

        //checking password and confirmPassword
        if(password != confirmPassword) {
            alert('passwords do not match!');
            return;
        }

        //sending a axios request to post the registration data
        try {
            const response = await axios.post('http://localhost:5000/api/user/register', {
                first_name,
                second_name,
                email,
                password,
                confirmPassword
            });

            if (response.status === 200) {
                nav('/login');  // navigate correctly
            } else {
                throw new Error('An error occurred');
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create Bondi Account</h2>

            <form className="business-form" onSubmit={handleSubmitData}>
                <div className="form-group">
                    <label htmlFor='firstname'>First Name</label>
                    <input
                        type="text"
                        id='firstname'
                        placeholder="Enter your first name"
                        required
                        value={first_name}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='secondname'>Second Name</label>
                    <input
                        type="text"
                        id='secondname'
                        placeholder="Enter your second name"
                        value={second_name}
                        onChange={(e) => setSecondname(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type="email"
                        id='email'
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        id='password'
                        placeholder="Enter new password"
                        autoComplete='true'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <input
                        type="password"
                        id='confirmpassword'
                        placeholder="Confirm new Password"
                        autoComplete='true'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                </div>

                <button className="submit-btn" type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignUForm;
