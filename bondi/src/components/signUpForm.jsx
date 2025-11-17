import { useEffect, useState } from 'react';
import '../css/signUp.css';
import axios from 'axios';


function SignUForm() {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    //handling default submission
    function handleSubmit(e) {
        e.preventDefault();
    }

    

    const SubmitData = async() =>{

        try {
            const response = await axios.post('api/user/signup/',{
                firstname,
                secondname,
                email,
                password,
                confirmpassword
            });
            if (response.status = 200) {

                console.log(response)
            } else {
                throw new Error('an error occured');
            }

        } catch (error) {
            console.log(error)

        }
    };







return (
    <div className="form-container">
        <h2 className="form-title">Create Bondi Account</h2>

        <form className="business-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='firstname'>First Name</label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    id='firstname'
                    placeholder="Enter your first name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor='secondname'>Second Name</label>
                <input
                    type="text"
                    id='secondname'
                    placeholder="Enter your second name"
                    value={secondname}
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
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                />
            </div>

            <button className="submit-btn" onClick={() => SubmitData()}>Submit</button>
        </form>
    </div>
)};



export default SignUForm;