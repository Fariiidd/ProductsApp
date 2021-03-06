import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-bottom: 40px;
`; 

export const Card = styled.div`
    width: 190px;
    height: auto;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const Img = styled.img`
    height: 50%;
    width: 100%;
    position: relative;
    border-radius: .5rem;
    transition: .3s ease;

    &:hover {
    transform: translateY(-25%);
    box-shadow: rgba(23, 23, 23, 1) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
   }
`;

export const InfoCard = styled.div`
     padding-top: 10%;
`;

export const Svg = styled.svg`
    width: 20px;
    height: 20px;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
`;

export const Title = styled.p`
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
`;

export const Description = styled.p`
    font-size: .9em;
    padding-bottom: 10px;
    height: auto;
`;

export const Price = styled.p`
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
`;

export const CardButton = styled.div`
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;

    &:hover {
    border: 1px solid #ffcaa6;
    background-color: #97C4B8;
   }
`;
   