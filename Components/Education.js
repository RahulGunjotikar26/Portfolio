import React from 'react';
import Contentedu from './content edu';
import './Education.css';

let Education = () => {
  let ssc= 'Model English School';
  let hsc= 'K V Pendharkar College';
  let grad= 'Vande Matram Degree College';
  return (
    <div className='edu'>
      <h2>Education</h2>
      <Education name ='ssc'/>
      <Contentedu>

      </Contentedu>
    </div>
  )
}

export default Education