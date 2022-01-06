import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

export default function ContactUs() {
  const [send, setSend] = useState("Send");

  const form = useRef();
  console.log('form:', form)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4okgs89",
        "template_xbaigur",
        form.current,
        "user_8jNhfiIC5wOy1NopJUjiL"
      )
      .then(
        (result) => {
          setSend("Thanks");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setSend("Try again");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Cont>
        <Left>
          <Inp>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required="true"
            />
          </Inp>

          <Inp>
            <input type="email" name="user_email" placeholder="Email" />
          </Inp>

          <Inp>
            <input type="text" name="subject" placeholder="Subject" />
          </Inp>
        </Left>
        <Right>
          <Inp>
            <textarea name="message" placeholder="Say hi..." />
          </Inp>
          <Btn>
            <button onClick={sendEmail}>{send}</button>
          </Btn>
        </Right>
      </Cont>
    </form>
  );
}

//-------styled-components------

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 7.8rem 0;
  background-color: #cc0000b8;
  color: #2c2c2c;
  @media (max-width: 600px) {
    padding: 3rem 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Inp = styled.div`
  margin: 1rem 0;
  input {
    font-size: 1rem;
    text-indent: 1rem;
    height: 3rem;
    width: 25rem;
    outline: none;
    :hover {
      outline: 1px solid #ffffff;
    }
    ::placeholder {
      color: #a8a8a8;
    }
    @media (max-width: 600px) {
      width: 23rem;
    }
  }
  textarea {
    height: 9rem;
    width: 30rem;
    padding: 1rem 0;
    outline: none;
    :hover {
      outline: 1px solid #ffffff;
    }
    font-size: 1rem;
    text-indent: 1rem;
    font-family: sans-serif;
    @media (max-width: 600px) {
      width: 23rem;
    }
  }
`;

const Btn = styled.div`
  margin-bottom: 1rem;
  button {
    text-align: center;
    height: 3rem;
    width: 30rem;
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    background-color: white;
    border: none;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    :hover {
      box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px,
        rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
      background-color: #d6ffe0;
    }
    a {
      text-decoration: none;
      color: #1f1f1f;
    }
    @media (max-width: 600px) {
      width: 23rem;
    }
  }
`;
