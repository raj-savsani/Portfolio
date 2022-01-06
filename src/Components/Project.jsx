import React,{useState} from 'react'
import styled from 'styled-components'
import {v4 as uuid} from 'uuid'

export default function Project({ data }) {

    const [aboutId, setAboutId] = useState("");
    
    const handleShowAbout = (e) => {
        setAboutId(e.target.id)
        console.log({aboutId})
    }

    return (
        <>
            {data.map((el) => (
            <Cont key={uuid()}>
                <ImgCont>
                        <img src={el.img} alt="" />
                    </ImgCont>
                        {el.id===aboutId ?
                        <DetailData onClick={(e) => handleShowAbout(e)} >
                            <div>{el.desc}</div>
                            <div><p>Tech Stack : </p> <div>{el.stack}</div></div>
                        </DetailData> : null}
                <Name>
                    <div className="name" id={el.id} onClick={(e) => handleShowAbout(e)}>{el.name}</div>
                    <div className="btn">
                        <Code><a href={el.gh} target="_blank" rel="noopener noreferrer">Code</a></Code>
                        <Site><a href={el.url} target="_blank" rel="noopener noreferrer">Site</a></Site>
                    </div>
                </Name>   
            </Cont>
            ))}
        </>
    )
}

const Cont = styled.div`
    padding-bottom: 1rem;
    margin: 2rem;
    border-radius: 0.3rem;
    background-color: #fff;
    width: 85%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: transform 450ms;
    :hover {
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 6px -1px;
    }
    @media (max-width: 1264px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: 1rem;
    }
    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8rem;
    }
`
const ImgCont = styled.div`
    align-self: center;
    max-width: 100%;
    border-bottom: 1px solid gray;
    img{
        width: 100%;
    }
`
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        padding: 0 1.5rem;
    }
    @media (max-width: 500px) {
        padding: 0 0.5rem;
    }
        .name{
            text-align: center;
            cursor: pointer;    
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
            :hover{
            box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
            background-color: #d6ffe0;
            }
            a{
                text-decoration: none;
                color: #1f1f1f;
            }
        }
        .btn{
            display: flex;
            justify-content: space-between;
        }
`
const Code = styled.div`
    padding: 0.5rem 0.6rem 0 0.5rem;
    border-right: 1px solid gray;
    cursor: pointer;
    a{
        text-decoration: none;
        color: #1f1f1f;
    }
    :hover{
        background-image: linear-gradient(to right, #fff,#fafafa,#f7f7f7, #eeeeee);
    }
`
const Site = styled.div`
    padding: 0.5rem 0.5rem 0 0.5rem;
    cursor: pointer;
    a{
        text-decoration: none;
        color: #1f1f1f;
    }
    :hover{
        background-image: linear-gradient(to right, #eeeeee,#fafafa,#f7f7f7, #fff);
    }
`
const DetailData = styled.div`
    background-color: white;
    color: #141414;
    padding: 1rem 2rem;
    transition: 1s ease-in-out;
    div>p{
        font-weight: bold;
    }
    div:last-child{
        display: flex;
        margin-top: 1.5rem;
        div{
            margin-top: -0rem;
            padding-left: 0.3rem;
        }
    }
    :hover{
        color: #fff8f8;
        background-image: linear-gradient(#1b1b1b, #171717, #141414, #111111, #000000);
    }
`