import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import ImageFive from '../images/ImageFive.jpg'
import ImageSix from '../images/ImageSix.jpg'
import ImageDB from '../images/ImageDB.png'
import ImageJS from '../images/ImageJS.jpg'
import ImagePython from '../images/ImagePython.png'



const Section = styled.section`
width: 100%;
height: 100%;
// padding: 10rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
height: 100%;
width: 100%;
padding: 5rem 1rem;
`;

const Heading = styled.div`
font-size: 1.5rem;
padding: 2rem 1rem;
margin-bottom: 40px;

@media screen and (max-width: 768px) {
    text-align: start;
}
`;

const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0rem;

@media screen and (max-width: 768px) {
    flex-direction: column
}
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%;

h2 {
    margin-bottom: 1rem;
    font-weight: 400;
}

@media screen and (max-width: 768px) {
    margin-bottom: 1rem;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 600px;
max-height: 400px;
object-fit: cover;
margin-bottom: 1rem;
`;

const ImageDB2 = styled.img`
width: 50%;
height: 50%;
padding: 0.5rem;
max-width: 50px;
max-height: 100px;
object-fit: cover;
margin-bottom: 1rem;
`;

const ImageJS2 = styled.img`
width: 50%;
height: 50%;
padding: 0.5rem;
max-width: 50px;
max-height: 100px;
object-fit: cover;
margin-bottom: 1rem;
`;

const ImagePython2 = styled.img`
width: 50%;
height: 50%;
padding: 0.5rem;
max-width: 50px;
max-height: 100px;
object-fit: cover;
margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
width: 140px;
transition: 0.3s;

&:hover {
    transform: translateY(-2px);
}
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px
`;

const ExperienceDetails = () => {
    return (
        <div>
            <Section>
                <Container>
                    <Heading>
                        <h1>View my Experience</h1>
                    </Heading>
                    <InfoRow>
                        <InfoWrap>
                            <Image src={ImageFive} alt='experience' />
                            <h2>
                                Fintech Software Engineer
                            </h2>
                            <p>
                                In my developer role at JPMorgan Chase I have used pyhton for automating internal client onboarding tools.
                                While developing the automation using stadard design patterns and principles, I developed the front end of the application
                                using ReactJS. I have been in my current role for 2 years.
                            </p>
                        </InfoWrap>
                        <InfoWrap>
                            <Image src={ImageSix} alt='experience' css={`
                            margin-top: 120px;
                            @media screen and (max-width: 768px) {
                                margin-top: 0px;
                            }
                            `}/>
                            <h2>
                            Education
                            </h2>
                            <p>
                                I graduated from USF with a bachelors in Industrial Engineering and went a Java developer bootcamp upon job placement at JPMC.
                                Although I do not code in Java, I use the OOP priciples I learned there to help in my development cycle. I have also recently started my masters in Cybersecurity at USF
                                with an expected graduation date of May 2023. I plan to use my tech stack and knowledge of data science, automation, ML and cybersecurity to polish myself as
                                a innovative and dynamic engineer.
                            </p>
                        </InfoWrap>
                    </InfoRow>
                </Container>
            </Section>
        </div>
    )
}

export default ExperienceDetails
