"use client";

import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    background-color: #ffe8b9;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 45px;
`;

const StyledH1 = styled.h1`
    font-size: 100px;
    color: #ef4800;
    margin: 0;
`;

const StyledP = styled.p`
    font-size: 55px;
    color: Black;
    margin: 0;
`;

const StyledInput = styled.input`
    font-size: 55px;
    color: Black;
    padding: 18px 24px;
    width: 700px;
    height: 40px;
    border: 5px solid #ef4800;
    border-radius: 10px;
`;

const StyledLink = styled(Link)`
    font-size: 65px;
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