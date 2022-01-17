import React from 'react';
import  './style.css'
import coverImage from '../../assets/images/clonex.jpeg';


function About() {
  return (
      <React.Fragment>
    <section className="hero">
        <div className="image">
            <img src={coverImage} alt="CloneX avatar" className="avatar"/>
        </div>

        <div className="hero-subtitle">
            <p>The mind is not a vessel to be filled but a fire to be kindled.<br></br>   
            -Plutarch</p>
        </div>
        </section>
        <section className="about-me" id="about-me">
       
        <div className="about-title">
    
         <h2>About Me</h2>

        </div>
        
        <div className="about-info">
    
            <p>
             Hi! I'm Manny, I am a full stack developer and blockchain analyst.  My goal and constant practice is to make the computer bend to my will. I love solving problems and creating beautiful code.  If you need something done I can make something for you.  
            </p>
            
         
            <p>
                In the section below I have included some examples of live projects that I have created. Also, feel free to contact me if you have questions about any work or program redesign you may be interested in. My contact info is at the bottom.

         
            </p>

        </div>

    </section>
    
    
    </React.Fragment>
  );
}

export default About;