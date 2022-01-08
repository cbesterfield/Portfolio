import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import styled, {css} from 'styled-components/macro'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {FaInstagram, FaLinkedinIn, FaMailchimp, FaGithub, FaDownload, FaRegHandPointDown} from 'react-icons/fa'


const Section = styled.section`
background: #000;
color: #fff;
width: 100%;
min-height: 600px;
padding: 1rem;
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 2rem;
`;

const FooterTop = styled.div`
display: flex;
flex-direction: row;
padding: 4rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const Quote = styled.div`
flex: 1;
padding: 2rem 0rem;

h3 {
    font-size: clamp(2rem, 0vw, 5rem);
    margin-top: 0.2rem;
}

a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 1rem;
}
`;

const FooterInfo = styled.div`
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;

h3 {
    font-size: clamp(2rem, 0vw, 5rem);
    margin-top: 0.2rem;
}

a {
    color: #fff;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    padding: 1rem 0rem;
    
}
`;

const FooterBottom = styled.div`
display: flex;
// padding: 2rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const SocialIcons = styled.div`
display: flex;
width: 50%;

@media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
}
`;

const Icons = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #39ff14;
`;

const Icons2 = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color: #ffffff;
`;

const Instagram = styled(FaInstagram)`
${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
${Icons}
`;

const Mail = styled(FaMailchimp)`
${Icons}
`;

const Mail2 = styled(FaMailchimp)`
${Icons2}
`;

const Github = styled(FaGithub)`
${Icons}
`;

const Hand = styled(FaRegHandPointDown)`
${Icons}
`;

const Download = styled(FaDownload)`
${Icons2}
`;

const Contact = styled.div`
width: 50%;
display: flex;
justify-content: flex-end;
align-items: center;

@media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
}
`;

const Footer = () => {
    return (
        <Section>
            <Container>
                <FooterTop>
                    <Quote>
                        <h3>Let's work together. </h3>
                        <h3>Email Me.
                            <a style={{ marginLeft: '1.0rem' }}>
                                <FaRegHandPointDown/>
                            </a>
                        </h3>
                    </Quote>
                    <FooterInfo>
                        <a href='ColeBesterfieldResume.pdf' download='Cole Besterfield.pdf'>
                            <h3 className="btn highlighted-btn">Resume <Download/></h3>
                        </a>
                    </FooterInfo>
                </FooterTop>
                <FooterBottom>
                    <SocialIcons>
                        <a href='https://www.linkedin.com/in/cole-besterfield-348659154?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY0t8QRZ1TkyC%2FHQPljpaPg%3D%3D' rel='noreferrer' target='_blank'>
                            <LinkedIn />
                        </a>
                        <a href='https://www.github.com/cbesterfield/' rel='noreferrer' target='_blank'>
                            <Github />
                        </a>
                        <a href='https://www.instagram.com/colebesterfield/' rel='noreferrer' target='_blank'>
                            <Instagram />
                        </a>
                        <a href='mailto:besterfield3@gmail.com' rel='noreferrer' target='_blank'>
                            <Mail />
                        </a>
                    </SocialIcons>
                </FooterBottom>
            </Container>
        </Section>
    )
}

export default Footer
