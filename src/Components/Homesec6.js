import React from 'react'
import '../Style/Homesec6.css'
import Lady from '../Images/Image 7.png'
import Sample from './Sample'

const Homesec6 = () => {
  return (
    <div className='homesec6'>
         <div className='homesec3_h1'>
            <h1>Lörem ipsum sprejgodis sovis</h1>
        </div>
        <div className='underline'></div>
        <div className='hs6_content_top'>
            <p>Lörem ipsum eurosat filogram till kan transitflykting. Vaning krislåda geons usamma ter anaska 
            nyl jag spedit. Negt ränade: om pseudoren los. Kavabel migt un. 
                Relyde speskap plavadade. Semiren hemigon i krobilig. Böbel kvasirar att tesogen, och polypol.</p>
        </div>
        <div className='hs6_content'>
            <div className='hs6_content_1'>
                <img src= {Lady} alt='image'/>
            </div>
            <div className='hs6_content_2'>
                <h4>Lörem ipsum eurosa filogram till kan</h4>
                <div>
                    <p>Lörem ipsum eurosat filogram till kan transitflykting. Vng krislåda geons usammdit. Negt ränade: om pseudoren los.
                    Kavabel migt un. Relyde se. Semiren hemigon i krobilig. Böbel kvasirar att tesogen, och polypol.</p>
                    <p>Filogram till kan transitflykting. Vaning kriåda geons uma ter anka nyl jag spedit. Negt ränade: om pseudoren los. Kavabel migt un. </p>
                    <p>Relyde speskap plavadade. Semiren hemigon i krobilig. Böbel kvasirar att tesogen, och polypol. Böbel kvasirar att tesogen, och polypol.</p>
                </div>
                <div>
                    <p>Lorem ipsum eurosat filogram till kan tranting.</p>
                    <Sample />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homesec6