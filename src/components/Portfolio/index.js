import React from 'react';
import  './style.css'

function Portfolio() {
    return(
        <section className="work-section" id="work">
     
        <div className="work-title">
          <h2>Work</h2>
        </div>

        
            <main className="work-main">
                
                <div className="flex-container">
                  
                  <div className="big-flex-item" onclick="location.href='https://mmelendez3.github.io/run-buddy/'">
                    <span>HTML/CSS</span>
                  </div>
                  
                  <div className="flex-item" id="flex-item2" onclick="location.href='https://concord511.github.io/Quote-Battle/'">
                    <span>Kanye Guess Quiz</span>
                  </div>
                  
                  <div className="flex-item" id="flex-item3" onclick="location.href='https://github.com/Bycicleace/MyBook/'">
                    <span>MyBook</span>
                  </div>
                  
                  <div className="flex-item" id="flex-item4">
                    <span>CODE</span>
                  </div>
                  
                  <div className="flex-item" id="flex-item5">
                    <span>CODE</span>
                  </div>
                
                </div>
              
            </main>
          
            

    </section>
    )
}

export default Portfolio;