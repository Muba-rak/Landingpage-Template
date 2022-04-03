import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import '../Style/Sample.css'

const Sample = () => {
    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          < >
            <Button variant="dark" onClick={handleShow} className= 'get_btn'>
              Get Program Package
            </Button>
      
            <Modal show={show} onHide={handleClose}  className='firstmodal' dialogClassName="modal-90w">
              <Modal.Header closeButton>
                <p>Lörem ipsum posorade syhet. jäall metrotism</p>
              </Modal.Header>
              <Modal.Body>
                <form>
                <ul class="frm2">
                        <div class="namefrm">
                            <li><input class="fm" type="text" placeholder="First name" /></li><br/>
                            <li><input class="fm" type="text" placeholder="Last Name" /></li><br />
                        </div><br />
                        <li><input class="frm" type="email" placeholder="Email" /></li><br />
                        <li><input class="frm" type="tel" placeholder="Phone Number" /></li><br />
                        <button>Get Program Package</button>
                    </ul>
                </form>
              </Modal.Body>
              
            </Modal>
          </>
        );
      }
      
      return (<Example />);
//   return (
//     <div>
        
//     </div>
//   )
}

export default Sample