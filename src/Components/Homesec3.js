import React from 'react'
import '../Style/Homesec3.css'
import Img from '../Images/image 8.png'
import Sample from './Sample'

const Homesec3 = () => {
  return (
    <div className='homesec3'>
        <div className='homesec3_h1'>
            <h1>Lörem ipsum sprejgodis sovis</h1>
        </div>
        <div className='underline'></div>
        <div className='homesec3_content'>
            <div className='content_1'>
                <p>
                Lörem ipsum eurosat filogram till kan transitflykting.
                Vaning krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om pseudoren los. Kavabel migt un. Relyde speskap plavadade. 
                Semiren hemigon i krobilig. Böbel kvasirar att tesogen, och polypol. Du kan vara drabbad.</p> <br /><br />
                <p>Realig seteren, i kubel. Lade samlarsyndrom och vasat söbel, arurad. 
                Ding preda dor i exorar samt ären i maskapet, ses. Orubel epinde parangen nengen. Beska krott hynade dengen plaloskap,
                tisk: plaskade. </p>
                <br /><br />
                <p>Den nya ekonomin krock nyrena popresade trening pon däna. 
                Kack ding en mis rekaktig fastän dingar pande genusbudgetering krongen. Prer. Telologi dyment i gångpeng eure i mode. 
                </p>
                <Sample />
            </div>
            <div className='content_2'>
                <img src={Img} alt='' />
            </div>
           
            
        </div>
    </div>
  )
}

export default Homesec3