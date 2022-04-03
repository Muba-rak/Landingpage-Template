import React from 'react'
import '../Style/Homesec4.css'
import Img1 from '../Images/Image 3.png'
import Img2 from '../Images/Image 2.png'
const Homesec4 = () => {
    const items = [
        {
            image: Img1,
            comment: 'Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. Homokompetens sock renisamma bel deledes. Kyn dilassa. Derade gådisamma trelov fastän yv tills heterokans, och sessa, som bylig.Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. ',
            name: 'Anna Samuelsson',
            stack: 'FRONTEND DEVELOPER',
            agency: 'AnnaAgency.com'

        },
        {
            image: Img2,
            comment: 'Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. Homokompetens sock renisamma bel deledes. Kyn dilassa. Derade gådisamma trelov fastän yv tills heterokans, och sessa, som bylig.Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. ',
            name: 'Kristina Ahmed',
            stack: 'FRONTEND DEVELOPER',
            agency: 'AnnaAgency.com'

        }

    ]
  return (
    <div className='homesec4'>
        <div className='homesec4_container'>
        {
            items.map((item)=>(
                <div className='item_description'>
                    <img src={item.image} alt='person-image' />
                    <p> {item.comment} </p>
                    <h2> {item.name}  </h2>
                    <h4> {item.agency} </h4>

                </div>
            ))
        }

        </div>
        
        

    </div>
  )
}

export default Homesec4