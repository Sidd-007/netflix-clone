import React from 'react'
import Main from '../../components/Main/Main'
import Row from '../../components/Row/Row'
import RowTV from '../../components/Row/RowTV'
import requests from '../../Requests'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
            <RowTV rowID='7' title='Popular TV' fetchURL={requests.requestTV} />
            {/* <Row rowID='7' title='Top Rated TV' fetchURL={requests.requestTVTopRated} /> */}
        </>
    )
}

export default Home