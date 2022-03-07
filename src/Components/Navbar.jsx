import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <Nav>
      <NavCont>
        <Logo onClick={() => scroll.scrollToTop()}>
          <span class="grey-color"> &lt;</span>
          <span class="logo-name">Raj Savsani</span>
          <span class="grey-color">/&gt;</span>
        </Logo>
        <Menu>
          <Link to="skills" smooth={true} duration={1500}>
            <Skills> Skills </Skills>
          </Link>
          <Link to="projects" smooth={true} duration={1500}>
            <Projects> Projects </Projects>
          </Link>
          <Link to="footer" smooth={true} duration={1500}>
            <Contact> Contact </Contact>
          </Link>
          <Resume>
            {" "}
            <a
              href="https://drive.google.com/file/d/1kXkQP63bty8rSJCFtfJgRQqYaNgAxEOk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Resume>
        </Menu>
      </NavCont>
    </Nav>
  );
}

const Nav = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  //border-bottom: 1px solid gray;
  height: 3.5rem;
  background: rgba(1, 1, 1, 1, 1);
  backdrop-filter: saturate(150%) blur(50px);
  @media (max-width: 768px) {
    height: 3.5rem;
  }
`;
const NavCont = styled.div`
  padding: 0 2rem;
  color: #0f1108;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 5px 15px;
  }
`;
const Logo = styled.div`
  //   font-family: "Philosopher", sans-serif;
  span:nth-child(1) {
    font-weight: bold;
    font-size: 2rem;
  }
  span:nth-child(3) {
    font-weight: bold;
    font-size: 2rem;
  }
  span:nth-child(2) {
    font-family: "Agustina Regular";
    font-weight: bold;
    font-variant-ligatures: no-common-ligatures;
    -webkit-font-variant-ligatures: no-common-ligatures;
    padding: 0 10px;
    // font-size: 1.2rem;
    cursor: pointer;
    color: #0f1108;
  }
  :hover {
    background: #e7ffed;
    transition: 0.4s;
  }
  @media (max-width: 768px) {
    span:nth-child(1) {
      font-weight: bold;
      font-size: 1rem;
    }
    span:nth-child(2) {
      font-weight: bold;
      font-size: 1rem;
    }
    span:nth-child(3) {
      font-weight: bold;
      font-size: 1rem;
    }
    line-height: 1;
  }
`;
const Menu = styled.div`
  display: flex;
  font-size: 1.3rem;
  line-height: 3.5rem;
  justify-content: space-between;
  div {
    font-size: 1rem;
    position: relative;
    width: 5.6rem;
    padding: 0 1rem;
    margin: 0 2rem;
    cursor: pointer;
    @media (max-width: 768px) {
      padding: 0%;
      margin: 0%;
      line-height: 2.8rem;
    }
    :hover {
      background: #e7ffed;
      transition: 0.4s;
    }
  }
  div:after {
    content: "";
    position: absolute;
    background-color: #80ab82;
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0px;
    transition: 0.3s;
  }
  div:hover:after {
    width: 100%;
  }
`;
const Skills = styled.div`
  :hover {
    font-weight: bold;
  }
`;
const Projects = styled.div`
  :hover {
    font-weight: bold;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const Contact = styled.div`
  :hover {
    font-weight: bold;
  }
`;
const Resume = styled.div`
  :hover {
    font-weight: bold;
  }
  a{
    text-decoration: none;
    color: #0f1108;
  }
`;
