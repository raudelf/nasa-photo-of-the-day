import React from "react";
import styled from 'styled-components';

const Filter = styled.div`
width: 100%;
height: 100%;
backdrop-filter: blur(8px);
`;

const Card = styled.div`
width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
`;

const Header = styled.div`
width: 900px;
display: flex;
justify-content: space-between;
align-items: baseline;
`;

const Headline = styled.h1`
width: 900px;
font-family: 'Audiowide', cursive;
font-size: 46px;
text-align: center;
`;

const Image = styled.div`
width: 900px;
`;

const Img = styled.img`
max-width: 900px;
`;

const Info = styled.div`
width: 900px;
text-align: left;
padding-bottom: 2%;
`;

const InfoCard = props => {
    const Container = styled.div`
    background-image: url("${props.image}");
    background-repeat: no-repeat;
    background-size: 100vmax;
    background-attachment: fixed;
    `;
    return (
        <Container><Filter>
            <Card className='card-container'>
                <Headline>NASA Astronomy POD</Headline>
                <Header className='header'>
                    <div>
                        <h2 className='title'>{props.title}</h2>
                    </div>
                    <div className="detail date">
                        <p className='date'>{props.date}</p>
                    </div>
                </Header>    
                <Image className='image-container'>
                    <Img className="nasaphoto" alt='A Galaxy' src={props.hdimage}/>
                </Image>
                <Info className='info-container'>
                    <p>{props.explanation}</p>
                </Info>
            </Card>
            </Filter>
        </Container>
    )
}

export default InfoCard;