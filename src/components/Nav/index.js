import React from 'react';

function Nav(props) {

    const {
        sections = [],
        setCurrentSection,
        currentSection
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">Manny</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {sections.map((section) => (
                        <li className={`mx-2 ${currentSection.name === section.name && 'navActive'}`} key={section.name}>
                            <span onClick ={() => setCurrentSection(section)}>{section.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;