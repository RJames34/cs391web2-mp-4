export type Song = {
    id: number;
    title: string;
    url: string;
    song_art_image_thumbnail_url: string;
    primary_artist: {
        name: string;
    };
}