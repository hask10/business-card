import { Instagram } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
export default function SocialIcons(){
    return(
        <div className='social-icons'>
        <a href="https://instagram.com/hask1804" className="ig-icon"><Instagram /></a>
        <a href="https://facebook.com/hask10" className="fb-icon"><Facebook /></a>
        <a href="https://x.com/hamadahmad1234" className="twitter-icon"><Twitter/></a>
        <a href="https://github.com/hask10" className="github-icon"><Github /></a>
        </div>
    )
}
