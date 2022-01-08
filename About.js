import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import ImageFour from '../images/ImageFour.jpg';


const Section = styled.section`
    background: #000;
    padding: 12rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    // background: #fff;
    padding: 3rem 2rem;
    position: relative;
`;

const Wrap = styled.div``;

const ColumnLeft = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px -15px;
    justify-content: flex-start;
    padding: 1rem;
`;

const Content = styled.div`
    flex: 0 0 50%;
    color: #fff;

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 250px;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 2rem;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.5rem;
    }
`;

const ColumnRight = styled.div`
    position: absolute;
    top: -80px;
    right: 0;
    max-width: 850px;
    height: 125%;
    width: 45%;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        height: 320px;
        top: -65px;
        width: 80%;
        margin: 0 auto;
        left: 0;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const About = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                    <ColumnLeft>
                        <Content>
                            <h1>About Me</h1>
                            <p>
                                I am a Software Engineer working in financial technology.
                                I develop internal automation tools and my tech stack is reactJS frontend with a python flask backend
                                integrated through MariaDB MySQL database.
                            </p>
                            <p>
                                I love software, technology, data, cybersecurity and am a super nerd for science fiction.
                                I have a huge passion for bitcoin technology and machine learning also.
                            </p>
                            <Button to='/about'>See Details</Button>
                        </Content>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={ImageFour} />
                    </ColumnRight>
                </Wrap>
            </Container>
        </Section>
    );
};

export default About
