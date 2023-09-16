//  Import Lib
import React, { useEffect, useState } from "react";
import MovieCard from "../../Component/MovieCard/MovieCard";
import axios from "axios";
import '../common.css'

import { HeaderConfig, ServerURL } from "../../ServerFiles/ServerURL";
const HomePage = () => {
    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        getAllMovie()
    }, [])
    const getAllMovie = async () => {
        const respons = await axios.get(ServerURL.gettAllMovie)
        if (respons?.status === 200 && respons?.data?.status === 200) {
            setMovieData(respons?.data?.data)
        } else {
            setMovieData([])
        }
    }
    return (
        <div className="container">
            <div className="grid">
                <div className="col-12">
                    <h1>Movie List</h1>
                </div>
            </div>
            <div className="grid">
                {
                    movieData.map((data, index) => {
                        return (
                            <div className="col-12 md:col-4 sm:col:12 lg:col-3" key={index}>
                                <MovieCard
                                    data={data}

                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage;