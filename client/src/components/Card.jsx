import React from "react";
import styled from "styled-components";
import grandCanyonImage from '../img/grand_canyon.jpg';
import {Link} from "react-router-dom";


const Container=styled.div`
color:${({theme})=>theme.text};
width:${(props)=>props.type === "sm" && "360px"};
margin-bottom:${(props)=>props.type === "sm" ? "10px" : "45px"};
cursor:pointer;
display:${(props)=>props.type === "sm" && "flex"};
gap:10px;
`

const Image=styled.img`
width:100%;
height:${(props)=>props.type === "sm" ? "150px" : "202px"};
background-color:#999;
flex:1;
`

const Details=styled.div`
display:flex;
margin-top:${(props)=>props.type === "sm" && "16px"};
gap:12px;
flex:1;
`
const ChannelImage=styled.img`
width:36px;
height:36px;
border-radius:50%;
display:${(props)=>props.type === "sm" && "none"};
background-color:#999;
`

const Texts=styled.div`

`

const Title=styled.h1`
font-size:18px;
color:${({theme})=>theme.text};

`

const ChannelName=styled.h2`
font-size:14px;
color:${({theme})=>theme.text};
margin:9px 0px;
`

const Info=styled.div`
font-size:14px;
color:${({theme})=>theme.textSoft};
`

export default function Card({type}){
    return(
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={type}>
            <Image type={type} src={grandCanyonImage}/>
            <Details type={type}>
                <ChannelImage type={type} src={grandCanyonImage}/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>YouDev</ChannelName>
                    <Info>660,908 Views • 1 Day Ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}