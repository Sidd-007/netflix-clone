import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';

function Movie() {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    const opts = {
        height: "200",
        width: "300px",
        playerVars: {
            autoplay: 0,
        }
    }

    useEffect(() => {
        const fetchDeatils = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c5b5985fb1a8f07ebcd36de9e82c4de6&&language=en-US&append_to_response=videos,images,credits`);

            const data = await response.json();
            console.log(data)
            setDetailData(data)
        }
        fetchDeatils();
    }, [id]);

    return (
        <>
        <div className='w-full text-white flex flex-col justify-center items-center'>
                <img
                    className='w-full h-[400px] object-cover '
                    src={`https://image.tmdb.org/t/p/original/${detailData.backdrop_path}`}
                    alt='/'
                />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>

                <div className='absolute top-[10%] p-4 '>
                    <div className='relative mt-40 flex flex-col justify-center items-center'>
                        <img src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`} alt="" className='object-contain h-80 w-96' />
                        <div className='mt-5'>
                            <h1 className='text-3xl md:text-5xl font-bold'>{detailData.name}</h1>
                        </div>
                        <div className='flex justify-center items-center mt-10'>

                            {detailData.genres && detailData.genres.map(genre => (
                                <div className=' sm:mr-6 mr-2 px-3 py-1.5 text-xs shadow-lg shadow-cyan-500/40 text-cyan-800 bg-cyan-100 rounded-full' key={genre.id}>{genre.name}</div>
                            ))}
                        </div>

                        <div className='grid sm:grid-cols-4 grid-cols-2 mt-10'>
                            {detailData.credits && detailData.credits.cast.map(genre => (<div className='mt-6 flex justify-center flex-col items-center'><img class="p-1 w-24 object-cover h-24 rounded-full ring-2 ring-gray-300 dark:ring-red-400" alt='' src={`http://image.tmdb.org/t/p/w500${genre?.profile_path}`} /><div className='' key={genre.id}>{genre?.name}</div></div>))}
                        </div>

                        <div className='mt-20 grid sm:grid-cols-2 grid-cols-1 '>

                            {detailData.videos && detailData.videos.results.map(video => (<div className='mt-5 sm:mr-5'><YouTube videoId={video.key} opts={opts} /></div>))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie