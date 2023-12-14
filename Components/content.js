import React from 'react'
import './content.css'
import Comp from './comp'

const Contentedu = (props) => {
  return (
    <div className='content'>
        <div className='cards'>
            <div><Comp name={props.content[0].title} clas={props.content[0].std} place={props.content[0].location} year={props.content[0].date}/></div>
            <div><Comp name={props.content[1].title} clas={props.content[1].std} place={props.content[1].location} year={props.content[1].date}/></div>
            <div><Comp name={props.content[2].title} clas={props.content[2].std} place={props.content[2].location} year={props.content[2].date}/></div>
            <div><Comp name={props.content[3].title} clas={props.content[3].std} place={props.content[3].location} year={props.content[3].date}/></div>
        </div>
    </div>
  )
}

export default Contentedu;