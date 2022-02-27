import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import {v4 as uuid} from "uuid"

export default function Projects() {
    
    const projectData = [
        { id: "1", name: "Pluralsight - clone", img: "PluralSight.png", gh:"https://github.com/aadityaneve/Clone-Pluralsight", url:"https://aadityaneve.github.io/Clone-Pluralsight", desc: "Pluralsight is an online learning and workforce development platform that helps businesses and individuals adjust to changing technology. Pluralsight provide products to build tech skills & Get insights into your workflow. A collaborative project, developed along with 5 team members in 6 days.", stack:"HTML, CSS, Javascript, NodeJS, Express, MongoDB"},
        { id: "2", name: "TaTa CLiQ - clone", img: "tatacliq.png", gh:"https://github.com/ProgrammerBhanu/TataCliq-Project", url:"https://programmerbhanu.github.io/TataCliq-Project/", desc: "Tata Cliq is an Indian e-commerce company based in Mumbai, India. It is owned by Tata UniStore Limited, of Tata Group. TataCLiQ operates in categories such as Electronics, Fashion, Footwear and Accessories.", stack:"HTML , CSS, JavaScript"},
        { id: "3", name: "Mailchimp - clone", img: "mailchimp.jpeg", gh:"https://github.com/raj-savsani/mailchimp_clone", url:"https://mailchimpclonee.herokuapp.com/", desc: "Mailchimp is an American marketing automation platform and email marketing service for managing mailing lists and creating email marketing campaigns", stack:"React , CSS, MongoDB, Express"},
        
    ];

    return (
        <Cont id='projects' key={uuid()}>
            <Heading>Projects</Heading>
            <ProjectsCont>
                <Project data={projectData}/>
            </ProjectsCont>
        </Cont>
    )
}

const Cont = styled.div`
    background-color: #cce8ffb8;
    position: relative;
`
const Heading = styled.div`
    padding-top: 5rem;
    text-align:center ;
    font-size: 2rem;
    font-weight: 300;
`
const ProjectsCont = styled.div`
    margin: 5rem auto 0;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 1264px) {
        margin: 2rem auto 0;
        width: 80vw;
    }
    @media (max-width: 768px) {
        margin: 2rem auto 0;
        width: 90vw;
        padding-bottom: 3rem;
    }
    @media (max-width: 500px) {
        margin: auto;
        width: 100vw;
        padding-bottom: 3rem;
    }
`