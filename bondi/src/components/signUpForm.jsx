import '../css/signUp.css'

function SignUForm() {
    return (
        <div className="form-container">
            <h2 className="form-title">Create Bondi Account</h2>

            <form className="business-form">
                <div className="form-group">
                    <label for='firstname'>First Name</label>
                    <input type="text" id='firstname' placeholder="Enter your first name" required/>
                </div>
                <div className="form-group">
                    <label for='secondname'>Second Name</label>
                    <input type="text" id='secondname' placeholder="Enter your second name" />
                </div>

                <div className="form-group">
                    <label for='email'>Email Address</label>
                    <input type="email" id='email' placeholder="Enter your email" required/>
                </div>

                <div className="form-group">
                    <label for='password'>Password</label>
                    <input type="password" id='password' placeholder="Enter new password" autoComplete='true' required/>
                </div>

                <div className="form-group">
                    <label for='confirmpassword'>Confirm Password</label>
                    <input type="password" id='confirmpassword' placeholder="Confirm new Password" autoComplete='true' required/>
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}


export default SignUForm;