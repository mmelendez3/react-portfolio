import React from 'react';
import './style.css'

function Nav(props) {

    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    return (
        <header>
            <h1>
            <a href="">Manny Melendez</a>
            
        </h1>
        
            <nav>
                <ul>
                    {sections.map((section) => (
                        <li className={`${currentSection.name === section.name && 'navActive'}`} key={section.name}>
                            <span onClick ={() => setCurrentSection(section)}>{section.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;