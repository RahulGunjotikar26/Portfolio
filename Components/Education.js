import React from 'react';
import './Education.css';

let Education = () => {
  return (
    <div className='edu'>
      <h2>Education</h2>
      <section>
        <p>My Highest Qualification is BSc.(Life Science) year 2022. My CGPA is 7.97.</p>
      </section>
      <section>
        <p>I have completed my Full-Stack Web Developer course from NetTech India.</p>
      </section><br />
      <h2>Technologies</h2><br />
      <div className='tech'>
        <div>
          <h3>FrontEnd Developer</h3>
          <p>Having the skills of HTML5, CSS3, Bootstarp, JavaScript & React.Js.</p>
        </div>
        <div>
          <h3>BackEnd Developer</h3>
          <p>Having the skills of PHP & MySQL.</p>
        </div>
      </div>
    </div>
  )
}

export default Education