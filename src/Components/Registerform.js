import React from 'react'
import '../Style/Registerform.css'
import Img1 from '../Images/Image 3.png'
import Quote from '../Images/Quote 1.png'
import { Link } from 'react-router-dom'

const Registerform = () => {
  return (
    <div className='registerform'>
        <div className='register_form_content'>
            <div className='reg_form_left'>
               <div> <h1>Create An Account</h1> </div>
               <div className='main_form'>
                   <form>
                       <div>
                           <p>Your Full Name</p>
                           <input type='text' placeholder='Full Name' />
                       </div>
                       <div>
                           <p>Your Email Address</p>
                           <input type='text' placeholder='Email Address' />
                       </div>
                       <div>
                           <p>Your Phone Number</p>
                           <input type='text' placeholder='Phone Number' />
                       </div>
                       <div>
                           <p>Course</p>
                            <select  id="">
                                <option value="">Python Fullstack</option>
                                <option value="A">Frontend </option>
                                <option value="B">Javascript Fullstack</option>
                            </select>
                       </div>
                       <div>
                           <p>Type Of Program</p>
                            <select  id="">
                                <option value="">Weekday Classes</option>
                                <option value="A">Weekend Classes</option>
                                <option value="B">Online Classes</option>
                            </select>
                       </div>
                       <div className='form_password'>
                           <div>
                               <p>Password</p>
                               <input type='password' />
                           </div>
                           <div>
                               <p>Confirm Password</p>
                               <input type='password' />
                           </div>
                       </div>
                       <div>
                           <Link to='/payment'> <button>Continue</button> </Link>
                           
                       </div>

                   </form>
               </div>
            </div>
            <div className='reg_form_right'>
                <div className='image_form'>
                    <img src={Img1} alt='' className='form_img' />
                </div>
                <div>
                <img src={Quote} alt='' />
                    <p>Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire 
                    dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. </p>
                </div>
                <div className='anna'>
                    <h3>-Anna Samuelsson</h3>
                    <p>Frontend developer at Anna Agency</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Registerform