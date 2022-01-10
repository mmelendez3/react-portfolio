import React from 'react';
import AboutMe from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header({ currentSection }) {

    const renderSection = () =>{
        switch (currentSection.name) {
            case "About Me":
                return <AboutMe />
            case "Resume":
                return <Resume />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            default:
                return <AboutMe />
        }
    }

    return(
        <section>
            {renderSection()}
        </section>
    )
}

export default Header;