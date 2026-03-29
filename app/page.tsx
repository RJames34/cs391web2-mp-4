"use client";
import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 16px;
`;

const StyledH1 = styled.h1`
    color: #ef4800;
    margin: 0;
    font-size: 1.8rem;
`;

const StyledP = styled.p`
    color: black;
    margin: 0;
    font-size: 0.9rem;
`;

const StyledInput = styled.input`
    padding: 8px 12px;
    width: 300px;
    border: 2px solid #ef4800;
    border-radius: 10px;
    font-size: 0.9rem;
`;

const StyledLink = styled(Link)`
    padding: 8px 20px;
    background: #ef4800;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    font-size: 0.9rem;
`;

export default function Home() {
    const [artist, setArtist] = useState("");

    return (
        <StyledDiv>
            <StyledH1>Find Songs by any Artist!</StyledH1>
            <StyledP>Enter an artist name below to see their top songs</StyledP>
            <StyledP>Spell the artist name correctly</StyledP>
            <StyledP>Ex: Queen</StyledP>
            <StyledInput
                type="text"
                value={artist}
                placeholder="Artist name"
                onChange={(e) => setArtist(e.target.value)}
            />
            <StyledLink href={`/${artist}`}>Look at the Songs</StyledLink>
        </StyledDiv>
    );
}
