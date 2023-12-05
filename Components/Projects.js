import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  let [isFlipped, setIsFlipped] = useState(false);
  let [isFlipped2, setIsFlipped2] = useState(false);
  let [isFlipped3, setIsFlipped3] = useState(false);

  let flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  let flipCard2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  let flipCard3 = () => {
    setIsFlipped3(!isFlipped3);
  };


  return (
    <div className='pro'>
    <h2>Projects</h2><br/>
    <div className='projects'>

    {/* <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="card-front">
        <p>Front of the card</p>
      </div>
      <div className="card-back">
      <a href='/'><p>Code</p></a>
      </div>
    </div> */}

    {/* 2 */}

    <div className={`card2 ${isFlipped2 ? 'flipped2' : ''}`} onClick={flipCard2}>
      <div className="card2-front2">
        <p>Budget Tracker</p>
      </div>
      <div className="card2-back2">
        <a href='https://github.com/RahulGunjotikar26/Tracker.git' target='_blank'><p>Code</p></a>
      </div>
    </div>

    {/* 3 */}

    <div className={`card3 ${isFlipped3 ? 'flipped3' : ''}`} onClick={flipCard3}>
      <div className="card3-front3">
        <p>Gym Website</p>
      </div>
      <div className="card3-back3">
        <a href='https://github.com/RahulGunjotikar26/Gym-Website.git' target='_blank'><p>Code</p></a>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Projects;
