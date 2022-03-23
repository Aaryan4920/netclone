import { BannerContent } from "./BannerContent";

export const BannerBackground = ({ movie }) => {

    return (
        <header
            className="banner"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}
        >
            <BannerContent movie={movie} />MoviTitle
        </header>
    );
}