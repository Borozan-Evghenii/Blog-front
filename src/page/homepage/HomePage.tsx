import {FC} from 'react';
import Hero from "./homepageModule/Hero/Hero.tsx";
import Trending from "./homepageModule/trending/Trending.tsx";
import DiscoverPosts from "./homepageModule/discoverPosts/DiscoverPosts.tsx";

const HomePage: FC= () => {
    return (
        <main>
            <Hero/>
            <Trending/>
            <DiscoverPosts/>
        </main>
    );
};

export default HomePage;