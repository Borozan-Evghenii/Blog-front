import {FC} from 'react';
import { useSearchParams} from "react-router-dom";

const Search:FC = () => {
    const [searchParams] = useSearchParams();

    return (
        <section className={'container'}>
            <h2>Results for {searchParams.get('q')}</h2>
        </section>
    );
};

export default Search;