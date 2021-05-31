import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from "./requests";
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.getNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData()
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="bannerContents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                {/* background image */}
                <div className="bannerButtons">
                    <button className="bannerButton">Play</button>
                    <button className="bannerButton">My List</button>
                </div>

                <h1 className="bannerName"></h1>
                {/* title */}
                {/* description */}
                <h1 className="bannerDescription">{truncate(movie?.overview, 200)}</h1>
            </div>
            <div className="bannerFadeBottom"/>
        </header>
    )
}

export default Banner