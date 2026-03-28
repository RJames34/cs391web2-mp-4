import {NextResponse} from "next/server";

// Update the data everytime the page refreshes.
export const dynamic = "force-dynamic";

const GENIUS_API_KEY = process.env.GENIUS_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {

    // Using String-deconstruction, extract search parameters from the URL
    const {searchParams} = new URL(request.url);

    // Get the value of the 'artist' parameter from the query string
    const artist = searchParams.get("artist");

    // If no 'artist' parameter is provided, return a 400 Bad Request error response
    if (!artist) {
        return NextResponse.json({error: "No [artist] provided"}, {status: 400});
    }

    // Make an API request to Genius to search for the artist
    const searchRes = await fetch(
        `https://api.genius.com/search?q=${artist}`,
        {
            headers: {Authorization: `Bearer ${GENIUS_API_KEY}`},
        }
    );

    // If the API request fails (status code other than 200), return a 500 Internal Server Error response
    if (searchRes.status !== 200) {
        return NextResponse.json({error: "Failed to fetch data"}, {status: 500});
    }

    // Parse the JSON data from the API response
    const searchData = await searchRes.json();
    const artistId = searchData.response.hits[0].result.primary_artist.id;

    // Make another API request to Genius to fetch songs for the artist
    const songsRes = await fetch(
        `https://api.genius.com/artists/${artistId}/songs?sort=popularity&per_page=10`,
        {
            headers: {Authorization: `Bearer ${GENIUS_API_KEY}`},
        }
    );

    // If the API request fails (status code other than 200), return a 500 Internal Server Error response
    if (songsRes.status !== 200) {
        return NextResponse.json({error: "Failed to fetch songs"}, {status: 500});
    }

    // Parse the JSON data from the API response
    const data = await songsRes.json();

    // Return the parsed data in the response as JSON
    return NextResponse.json(data.response);
}