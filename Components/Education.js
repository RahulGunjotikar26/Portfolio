import React from 'react';
import './Education.css';
import Contentedu from './content';

let Education = () => {

    let edu = [{
        title: "Model English School",
        std:"10th",
        location: "Dombivli",
        date: 2014
    }, {
        title: "K V Pendharkar College",
        std:"12th",
        location: "Dombivli",
        date: 2017
    },
    {
        title: "Vande Matram Degree College",
        std:"Bachelor's of Science",
        location: "Dombivli",
        date: 2022
    },{
        title: "NetTech India",
        std:"Full Stack Web Developer",
        location: "Thane",
        date: 2023
    }]

    console.log(edu)

    return (
        <div className='edu'>
            <h2>Education</h2>
            <Contentedu content={edu}/><br/>
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>BootStrap</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>PHP</li>
                <li>MySQL</li>
            </ul>
        </div>
    )
}

export default Education