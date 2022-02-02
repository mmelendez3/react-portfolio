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
                  
                  <div className="big-flex-item">
                    <a href='https://mmelendez3.github.io/run-buddy/'>
                    
                    </a>
                  </div>
                  
                  <div className="flex-item" id="flex-item2">
                    <a href='https://concord511.github.io/Quote-Battle/'>
                    
                    </a>
                  </div>
                  
                  <div className="flex-item" id="flex-item3">
                    <a href=' https://cbc-my-book.herokuapp.com/'>
                    
                    </a>
                  </div>
                  
                  <div className="flex-item" id="flex-item4">
                    <a href="https://guarded-anchorage-60502.herokuapp.com/">
                    
                    </a>
                  </div>
                  
                  <div className="flex-item" id="flex-item5">
                    <a  href="https://cryptic-sands-45995.herokuapp.com/">
                    
                    </a>
                  </div>
                
                </div>
              
            </main>
          
            

    </section>
    )
}

export default Portfolio;
