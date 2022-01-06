import React from 'react'
import styled from 'styled-components'

export default function Loader() {
    return (
        <Cont>
            <ImgCont>
                <Hey>
                    Hey
                </Hey>
                <Img className="ImgCont">
                    <img src="h2o.gif" alt="" />
                </Img>
            </ImgCont>
        </Cont>
    )
}

const Cont = styled.div`
  position: relative;
    height: 100vh;
    width: 100vw;
    @media (min-width: 768px) {
        :hover .ImgCont{
        transform: translateX(40%);
        }
  }
`
const ImgCont = styled.div`
    position: absolute;
    display: flex;
    margin: auto;
    top: 7rem;
    left: 30%;
`
const Hey = styled.div`
font-size: 10rem;
margin-top: -2rem;
font-weight: thin;
color: #ebebeb;
@media (max-width: 768px) {
    font-size: 5rem;
    margin-top:0;
  }
`
const Img = styled.div`
margin-left: -13.5rem;
transition: 1s;
margin-left: -20rem;
    img{
        width:100%;
        margin:auto;
    }
     @media (max-width: 768px) {
    width: 150px;
    margin-top: 12rem;
    margin-left: -11rem;
  }
`