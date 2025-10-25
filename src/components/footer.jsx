import '../styles/footer.css' 
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Logo from '../styles/logo.png'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <div className='footer-brand'>
                        <div className='logo'>
                            <img href="#" src={Logo}/>
                            <h2>HOPE Club</h2>
                        </div>
                       
                        <p>
                            © 2025 HOPE. Made with passion by future doctors. 
                            Together, we learn, serve, and grow!
                        </p>
                    </div>
                    
                    <div className='footer-contact'>
                        <h3>Contact Us</h3>
                        <div className='social-links'>
                            <a href='https://www.instagram.com/hope.med.club/' target='_blank' rel='noopener noreferrer' className='social-link'>
                                <span><FaInstagram size={30} color="#E4405F" /></span> Instagram
                            </a>
                            <a href='https://www.tiktok.com/@hope_med_club?_t=ZS-90qHgexpiDY&_r=1' className='social-link'>
                                <span> < FaTiktok size={30} color="#000000"/></span> TikTok
                            </a>
                           
                        </div>
                    </div>
                </div>
                
                <div className='footer-right'>
                    <div className='footer-divider'></div>
                    <div className='footer-nav'>
                        <h3>Site Map</h3>
                        <ul className='nav-links'>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#activities'>Our Activities</a></li>
                            <li><a href='#events'>Events</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='footer-bottom'>
                <p>Khemis Miliana Annex – Aïn Defla Medical Students</p>
                <p>Bringing health, compassion, and knowledge together</p>
            </div>
        </footer>
    )
}