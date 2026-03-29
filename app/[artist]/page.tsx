"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import SongCard from "../components/songCard";
import styled from "styled-components";
import { Song } from "@/app/interfaces/lyrics";
import Link from "next/link";

const ArtistContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: auto;
    font-size: 20px;
`;

const SongsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const StyledLink = styled(Link)`
    background-color: #ef4800;
    border: 5px none;
    border-radius: 30px;
    padding-left: 60px;
    padding-right: 60px;
    color: Black;
    text-decoration: none;
`;

const StyledError = styled.h2`
    color: #ef4800;
    margin-top: 500px;
`;

export default function ArtistPage() {
    const params = useParams();

    // Fetch the Artist Data with SWR
    const { data, error } = useSWR(
        `/api/getArtistData?artist=${params.artist}`,
        (url) => fetch(url).then((res) => res.json())
    );

    // Handle Error and loading states
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;


    //If there is data, get the days otherwise an empty array.
    const songs = data?.songs || [];

    // There is no data then tell the user it's not found and to search again
    if (songs.length === 0) {
        return (
            <ArtistContentWrapper>
                <StyledError>Artist not found! Please try again.</StyledError>
                <StyledLink href="/"> Search again</StyledLink>
            </ArtistContentWrapper>
        );
    }
    return (
        <ArtistContentWrapper>
            <SongsContainer>
                {songs.map((song: Song, i: number) => (
                    <SongCard
                        key={i}
                        id={song.id}
                        title={song.title}
                        url={song.url}
                        song_art_image_thumbnail_url={song.song_art_image_thumbnail_url}
                        primary_artist={song.primary_artist}
                    />
                )
               )
              }
            </SongsContainer>
            <StyledLink href="/"> Search again</StyledLink>
        </ArtistContentWrapper>
    );
}
