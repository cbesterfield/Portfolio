import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
    // background: #000;
    padding: 5rem 0rem;
    display: flex;
    flex-direction: column;
    // justify-content: center;
`;

const Container = styled.div`
    // background: #fff;
    padding: 3rem 2rem;
    position: relative;
`;

const Wrap = styled.div`
    flex: 0 0 50%;
    color: #000;

    h1 {
        margin-bottom: 2rem;
        font-size: 2rem;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-right: 10px;
`;



const Technologies  = () => {
    return (
        <Section>
            <Container>
                <Wrap>
                        <h1>Technologies</h1>
                        <img src="https://img.icons8.com/ios-filled/48/000000/javascript-logo.png"/>
                        <img src="https://img.icons8.com/dotty/48/000000/react.png"/>
                        <img src="https://img.icons8.com/ios-glyphs/48/000000/python.png"/>
                        <img src="https://img.icons8.com/fluency/48/000000/maria-db.png"/>
                        <img src="https://img.icons8.com/color/48/000000/mysql-logo.png"/>
                        <img src="https://img.icons8.com/color/48/000000/git.png"/>
                        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                </Wrap>
            </Container>
        </Section>
    );
};

export default Technologies
