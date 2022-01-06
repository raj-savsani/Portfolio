import React from 'react'
import styled from 'styled-components'
import Skill from './Skill'


export default function Skills() {
    
    const skillsData = [
        { name: "HTML", url: "html.svg" },
        { name: "CSS", url: "css.svg" },
        { name: "JavaScript", url: "js.svg" },
        { name: "React", url: "react.svg" },
        { name: "Redux", url: "redux.svg" },
        { name: "Materia UI", url: "mui.svg" },
        { name: "Node", url: "node.svg" },
        { name: "Express", url: "express.svg" },
        { name: "MongoDB", url: "mongo.svg" },
        { name: "Git", url: "git.svg" },
    ];
    return (
        <Cont id = "skills">
            <Heading>Skills</Heading>
            <SkillsCont>
                <Skill data={skillsData}/>
            </SkillsCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #a1f5acb8;
    padding-bottom: 8rem;
    position: relative;
`
const Heading = styled.div`
    padding-top: 5rem;
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
`
const SkillsCont = styled.div`
    margin: 5rem auto;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 500px) {
        margin: 2rem auto;
        width: 100vw;
    }
`