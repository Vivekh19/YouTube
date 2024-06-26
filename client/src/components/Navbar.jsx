import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Upload from "./Upload";

const Container=styled.div`
position:sticky;
top:0;
background-color:white;
height:56px;
color:${({theme})=>theme.text};
background-color:${({theme})=>theme.bgLighter}
`

const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
height:100%;
padding:0px 20px;
position:relative;
`
const Search=styled.div`
position:absolute;
left:0px;
right:0px;
margin:auto;
width:40%;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #ccc;
border-radius:5px;
`

const Input=styled.input`
border:none;
background-color:transparent;
color:${({theme})=>theme.text};
`

const Button=styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`

const User=styled.div`
display:flex;
align-item:center;
gap:10px;
font-weight:500;
color:${({theme})=>theme.text};
`

const Avatar=styled.img`
width:32px;
height:32px;
border-radius:50%;
background-color:#999;  
`


export default function Navbar(){
const {currentUser}=useSelector(state=>state.user)
const [q,setQ]=useState("")
const [open,setOpen]= useState(false)
const navigate= useNavigate()


    return(
        <>
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" onChange={e=>{
                        setQ(e.target.value)
                    }}/>
                    <SearchIcon onClick={()=>navigate(`/search?q=${q}`)} />
                </Search>

                {currentUser ? 
                <User>
                    <VideoCallIcon onClick={()=> setOpen(true)}/>
                    <Avatar src={currentUser.image}/>
                     {currentUser.name}
                </User>
                : <Link to="signin" style={{textDecoration:"none"}}>
                <Button>
                     <AccountCircleIcon/>
                     SIGN IN
                     </Button>
                </Link>}
            </Wrapper>
        </Container>
        {open && <Upload setOpen={setOpen}/>}
        </>
    )
}