import React from 'react';
import './Home.css';
import img1 from '../Components/Images/Profile.jpg';

let Home = () => {
  return (
    <div className='home'>
      <div>
      <h1>Welcome To<br/> My Personal PortFolio</h1><br/>
      <h2>Rahul Unmesh Gunjotikar</h2><br/>
      <p>Enthusiastic and dedicated web development enthusiast, eager to kickstart a rewarding career in the tech industry as a Web Developer. Armed with a solid foundation in HTML, CSS, React.Js and JavaScript, along with a genuine passion for creating visually appealing and functional websites. A quick learner with a keen eye for detail, constantly seeking opportunities to expand technical skills and stay updated with the latest trends and best practices. Excited to contribute creativity, a collaborative spirit, and a determination to excel in a dynamic and growth-oriented work environment.</p><br/>
      <button className='resume'><a href='Rahul_Unmesh Gunjotikar_Resume.pdf' download>Resume</a></button>
      </div>
      <div>
        <img src={img1} alt='img1'></img>
      </div>
    </div>
  )
}

export default Home