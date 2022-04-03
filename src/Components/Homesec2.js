import React from 'react'
import '../Style/Homesec2.css'
import Vec1 from '../Images/Group.png'
import Vec2 from '../Images/Vector.png'
import Vec3 from '../Images/Vector-1.png'

const Homesec2 = () => {
    const items =[
        {
            image: Vec1,
            title: '16-Week Bootcamp',
            text: 'Lörem ipsum flitbonus renovräkning. Seminar suprafasreatire dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. Homokompetens sock renisamma bel.',
            id: 1
        },
        {
            image: Vec2,
            title: 'Develop New Skills',
            text: 'Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. Homokompetens sock renisamma bel.',
            id: 2
        },
        {
            image: Vec3,
            title: 'Become An Expert',
            text: 'Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire. Homokompetens sock renisamma bel.',
            id: 3
        }
    ]
  return (
      
    <div className='homesec2'>
        {
            items.map((item)=>(
                <div className='information' key = {item.id}>
                    <img src={item.image} alt='picture' className='hs_img' />
                    <h3> {item.title} </h3>
                    <div className='information_p'> <p> {item.text} </p> </div>
                </div>
            ))
        }
       
    </div>
  )
}

export default Homesec2