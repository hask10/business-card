import HamadImage from '../assets/hamad.jpg';
import { Linkedin } from 'react-bootstrap-icons';
import { EnvelopeAtFill } from 'react-bootstrap-icons';
function Info() {
  
    return (
      <div>
      <img className='image' width='100%' src={HamadImage}/>
        <h3 className='name'>Hamad Ahmad</h3>
        <p className='role'>Full-Stack Developer</p>
        <p className='website'>hostDomers.com</p>
        <div className='btn-div row'>            
        <button className='btn btn-light'><EnvelopeAtFill /> Email</button>
        <button className='btn btn-primary'><Linkedin /> LinkedIn</button>
        </div>
      </div>
    )
  }
  
  export default Info;
  