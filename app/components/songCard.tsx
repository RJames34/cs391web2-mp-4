import styled from "styled-components";
import {Song} from "@/app/interfaces/lyrics";

const SongCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid #ef4800;
    margin: 20px;
    width: 200px;
    border-radius: 16px;
    background-color: #fff2ab;
    font-size: 30px;
`;

const SongTitle = styled.p`
    font-weight: bold;
    text-align: center;
    margin: 16px 0 8px;
    color: #ef4800;
`;

const ArtistName = styled.p`
    color: Black;
    text-align: center;
    margin: 0;
`;

export default function SongCard(props: Song) {
    return (
        <SongCardWrapper className="song-card">
            <img
                src={props.song_art_image_thumbnail_url}
                alt={props.title}
                width={150}
                height={150}
            />
            <SongTitle>{props.title}</SongTitle>
            <ArtistName>{props.primary_artist.name}</ArtistName>
        </SongCardWrapper>
    );
}
