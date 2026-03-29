"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    margin: 20px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    background-color: #ffe8b9;
    font-size: 25px;
`;

const StyledH1 = styled.h1`
    color: #ef4800;
    margin: 20px;
`;

const StyledP = styled.p`
    color: Black;
    margin: 20px;
`;

const StyledInput = styled.input`
    margin-bottom: 10px;
    color: Black;
    padding: 14px 16px;
    width: 200px;
    height: 40px;
    border: 3px solid #ef4800;
    border-radius: 10px;
`;

const StyledLink = styled(Link)`
    padding: 18px 60px;
    background: #ef4800;
    color: Black;
    border-radius: 10px;
    text-decoration: none
`;

export default function Home() {
    const [artist, setArtist] = useState("");

    return (
        <StyledDiv>
            <StyledH1>Find Songs by any Artist!</StyledH1>
            <StyledP>Enter an artist name below to see their top songs</StyledP>
            <StyledP> Spell the artist name correctly</StyledP>
            <StyledP> Ex: Queen ( The best band ever!!!) </StyledP>
            <StyledInput
                type="text"
                value={artist}
                placeholder="Artist name"
                onChange={(e) => setArtist(e.target.value)}
            />
            <StyledLink href={`/${artist}`}> Look at the Songs</StyledLink>
        </StyledDiv>
    );
}
