import React from 'react';

import CarouselLayout from '../components/Carousel';
import DownloadButton from '../components/DownloadButton';

const HomePage = () => {
    return (
        <div>
            <CarouselLayout />
            <br />
            <DownloadButton />
        </div>
    )
}

export default HomePage;