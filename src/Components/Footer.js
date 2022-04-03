import React from 'react'
import '../Style/Footer.css'
import FooterLogo from '../Images/footer.png'
import Facebook from '../Images/Facebook.png'
import IG from '../Images/Instagram.png'
import Twitter from '../Images/Twitter.png'

const Footer = () => {
    
  return (
    <div className='footer'>
        <div className='footer_left'>
            <div className='footer_left_1'>
                <img src={FooterLogo} alt='' />
                <h3>Lorem Ipsum</h3>
            </div>
            <div className='footer_left_2'>
                <p>
                Lörem ipsum bior vadeplana mår miligen
                Teratåvis teolog proktig. 
                Amona geojong. prn
                </p>

                
            </div>
        </div>
        <div className='footer_mid'>
            <div className='footer_mid_1'>
                <h2>SIGN UP FOR THE NEWSLETTER</h2>
            </div>
            <div className='footer_mid_2' >
                <div>  <input type='text' placeHolder= 'Enter your Email Address' /> </div>
                <div> <button>Submit</button> </div>
            </div>
        </div>
        <div className='footer_right'>
            <h3>Social Media</h3>
            <div className='footer_right_1'>
                <a> <img src={Facebook} alt='facebook' /> </a>
                <a> <img src={IG} alt='facebook' /> </a>
                <a> <img src={Twitter} alt='facebook' /> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer