import redstar from "../assets/redStar.svg";
import greystar from "../assets/greyStar.svg";
import "../styles/Rating.css"

function Rating({rating}) {
    const stars = [1,2,3,4,5];

    return(
        <div className="rating">
            {stars.map((star) =>
            rating >= star? (
                <img key={star.toString()}
                className="icon-rating"
                src={redstar}
                alt=""/>
            ) : (
                <img key={star.toString()}
                className="icon-rating"
                src={greystar}
                alt=""/>
            )
            )}
        </div>
    )
}

export default Rating;