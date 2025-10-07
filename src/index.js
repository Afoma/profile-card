import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';


const skills = [
  {
    skill:"React",
    level:"advanced",
    color:"#2662EA"
  },
  {
    skill:"Solidity",
    level:"advanced",
    color:"#EFD81D"
  },
  {
    skill:"Blockchain Security Research",
    level:"advanced",
    color:"#C3DCAF"
  },
  {
    skill:"UI/UX Design",
    level:"intermediate",
    color:"#EB4F33"
  },
  {
    skill:"Git and GitHub",
    level:"advanced",
    color:"#60DAFB"
  },
  {
    skill:"Python",
    level:"beginner",
    color:"#FF3B00"
  }
];

function App(){
  return(
    <div className= 'card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src= '/image.png' alt='Afoma Orji'></img>

}

function Intro(){
  return (
    <div>
      <h1>Afoma Orji</h1>
      <p>Lorem ipsum dolor sit amet 
          Lorem ipsum dolor sit amet 
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet.
      </p>
    </div>
  )
}

      // <Skill skill='React.js' level= '🚀' color='blue' />
      // <Skill skill='Solidity' level= '🚀' color='grey' />
      // <Skill skill='Blockchain Security Research' level= '🚀'color='green' />
      // <Skill skill='UI/UX Design' level= '✨'color='green' />
      // <Skill skill='Git and GitHub' level= '🚀' color='silver'/>
      // <Skill skill='Python' level= '❤️'color='silver'/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


function SkillList(){
  const skillList = skills;
  const numSkills = skillList.length;
  return(
    <div className= 'skill-list '>
      {skillList.map((skill) =>(
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({skill, color, level}){
  return (
    <div className='skill' style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '❤️'}
        {level === 'intermediate' && '✨'}
        {level === 'advanced' && '🚀'}
      </span>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);