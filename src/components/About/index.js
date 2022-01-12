import React from 'react';
import  './style.css'


function About() {
  return (
    <section className="hero">
        <div className="image">
            <img src="../../assets/images/clonex.jpeg" alt="CloneX avatar"/>
        </div>

        <div className="hero-subtitle">
            <p>The mind is not a vessel to be filled but a fire to be kindled.
            -Plutarch</p>
        </div>
        <main class="about-me" id="about-me">
       
        <div class="about-title">
    
         <h2>About Me</h2>

        </div>
        
        <div class="about-info">
    
            <p>
             Hi! I'm Manny, I am a full stack developer and blockchain analyst.  My goal and constant practice is to make the computer bend to my will. I love solving problems and creating beautiful code.  If you need something done I can make something for you.  
            </p>
            
         
            <p>
                In the section below I have included some examples of live projects that I have created. Also, feel free to contact me if you have questions about any work or program redesign you may be interested in. My contact info is at the bottom.

         
            </p>

        </div>

    </main>
    
    </section>
  );
}

export default About;