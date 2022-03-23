import MoviTitle from "./MovieTitle";
import { Buttons } from "./Buttons";
import Trancate from "./Trancate";

export const BannerContent = ({movie}) => {
    return (
        <>
            <div className="banner_contents">
                <h1 className="banner_title">
                    <MoviTitle movie={movie} />
                </h1>
                <Buttons classname='banner_button' buttonDiscription='Play' />
                <Buttons classname='banner_button' buttonDiscription='My List' />

                <h1 className="banner_description">
                    <Trancate initaialString={movie?.overview} lengthFixed={150} />
                </h1>
            </div>
            <div className="banner--fadebottom"></div>
        </>
    );
}