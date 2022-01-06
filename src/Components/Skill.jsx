import React from 'react'
import styled from 'styled-components'
import {v4 as uuid} from "uuid"

export default function Skill({data}) {
    return (<>
        {data.map((el) => (
        <Cont key = {uuid()}>
            <ImgCont>
                <img src={el.url} alt="" />
            </ImgCont>
            <Name>
                {el.name}
            </Name>   
        </Cont>
        ))}
        </>
    )
}

const Cont = styled.div`
    margin: 2rem;
    border-radius: 0.3rem;
    background-color: #fff;
    width: 100px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: transform 450ms;
    :hover {
    transform: translateY(-7px);
    box-shadow: 2px 2px 5px 1px black;
    }
    @media (max-width: 500px) {
        margin: 1rem;
    }
`
const ImgCont = styled.div`
    align-self: center;
    padding: 1rem 0 0 0;
    max-width: 50px;
    img{
        width: 100%;
    }
`
const Name = styled.div`
    text-align: center;
    padding: 0.5rem 0;
`

