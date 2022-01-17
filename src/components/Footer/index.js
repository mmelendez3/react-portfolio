import React from 'react';
import './style.css'
import coverImage from '../../assets/images/GitHub-Mark.png';

function Footer() {
    return(
        <footer className="footer">
        <div className="footer__linkContainer">
            <a className="footer__links" href="https://github.com/mmelendez3">GitHub</a>
            <a className="footer__links" href="https://www.linkedin.com/in/manuel-melendez-8a5b33214/">LinkedIn</a>
            <a className="footer__links" href="https://stackoverflow.com/users/16268157/manuel-melendez">Stack Overflow</a>
        </div>
    </footer>
    )
}

export default Footer;