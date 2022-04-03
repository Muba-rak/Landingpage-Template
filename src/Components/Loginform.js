import React from 'react'
import '../Style/Loginform.css'

const Loginform = () => {
  return (
    <div className='loginform'>
        <div className='lf_content'>
            <div> <h1>Login</h1> </div>
            
            <form>
                <div>
                    <p>Your Email Address</p>
                    <input type='text' placeholder='Email Address' />
                </div>
                <div>
                    <p>Password</p>
                    <input type='password' />
                </div>
                <div>
                    <button>Continue</button>
                </div>


            </form>

        </div>

    </div>
  )
}

export default Loginform