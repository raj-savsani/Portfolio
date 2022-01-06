import React from 'react'
import './mysass.scss'
import styled from 'styled-components'

export default function Carousel() {
    return (
        <div class="slider">
            <div class="slide-track">
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" alt="" />
                </Item>
                <Item class="slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" alt="" />
                </Item>
            </div>
        </div>
        )
}
    
const Item = styled.div`
    img{
     height: 80px;
     width: 200px;
     border:1px solid black;
     @media (max-width: 500px) {
        height:70px;
        width: 160px;
    }
    }
`
