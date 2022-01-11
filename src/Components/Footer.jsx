import React ,{useState} from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Email from './Email'

export default function Footer() {

    const [show, setShow] = useState(false)

    return (
        <>
            {show?<Email/>:<></>}
            <Cont id='footer'>
                <FooterCont>
                    <IconsCont>
                        <div onClick={()=>setShow(!show)} ><EmailIcon className="icon" /></div>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/raj_savsani"><TwitterIcon className="icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raj-savsani"><LinkedInIcon className="icon" /></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/raj-savsani"><GitHubIcon className="icon" /></a>
                    </IconsCont>
                    <HrLine/>
                    <FooterLine>
                        <p>No © copyright issues | Designed & developed with <FavoriteIcon className="love"/> by Raj. </p>                    
                    </FooterLine>
                </FooterCont>
                </Cont>
            </>
    )
}

const Cont = styled.div`
    background-color: #080808;
    width: 100%;
`
const FooterCont = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem 5rem;
    @media (max-width: 768px) {
        width: 85%;
        padding: 1rem 2rem;
    }
    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem 1.2rem;
    };
`
const IconsCont = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    @media (max-width: 480px) {
        padding: 1rem 0;
    };
    .icon{
        color: #fcfcfc;
        font-size: 2rem;
        cursor: pointer;
    }
`
const HrLine = styled.div`
    border-bottom: 1px solid #fcfcfc ;
    margin-top: 1rem;
`
const FooterLine = styled.div`
    text-align: center;
    color: #fcfcfc;
    margin: 1.5rem 0 0.4rem 0;
    .love{
        font-size: 1rem;
        color: red;
    }
`
