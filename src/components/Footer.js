import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
    const facebook = <FontAwesomeIcon icon={faSquareFacebook} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />

    return (
        <div className='footer'>
            <div className="lowerfooter">
                <div className='social-media'>
                    <a href='#'>{facebook}</a><a href='#'>{instagram}</a><a href='#'>{twitter}</a><a href='#'>{youtube}</a>
                </div>
                <br></br>
                <div className='footer-links'>
                    <a href='#'>Conditions of Use</a><a href='#'>Privacy & Policy</a><a href='#'>Press Room</a>
                </div>
                <br></br>
                <p>© 2023 Pixels by Harrison Olufemi Orimolade</p>
            </div>
        </div>
    )
}

export default Footer;