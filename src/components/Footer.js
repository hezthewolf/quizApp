import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer() {
    return(
        <div>
            <footer>
                <div className="footer-socials">
                    <FontAwesomeIcon icon ={'twitter'}/>
                    <FontAwesomeIcon icon ={'facebook'}/>
                    <FontAwesomeIcon icon ='instagram'/>
                </div>

                
            </footer>
        </div>
    )
}


export default Footer;