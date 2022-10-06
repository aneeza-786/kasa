import { useParams } from "react-router-dom";
import products from "../data/logements.json";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import "../styles/Accomodation.css";

function Accomodation() {
    const {productId} = useParams();
    const product = products.find((product) => product.id === productId);
    const { title, location, pictures, rating } = product;
    return(
        <section className="accomodation">
            <Slider slides={pictures}/>
            <div className="accomodation2">
                <div className="accomodation-content">
                    <div className="accomodation-info">
                        <h1 className="accomodation-title">{title}</h1>
                        <p className="accomodation-location">{location}</p>
                    </div>
                    <div className="accomodation-tags">
                        {product.tags.map((tag,index) => (
                            <Tags key={index} getTag={tag}/>
                        ))}
                    </div>
                </div>
                <div className="accomodation-ratings-host">
                    <div className="host-info">
                        <p className="host-name">{product.host.name}</p>
                        <img src={product.host.picture} alt="host" className="host-pic" />
                    </div>
                    <Rating rating={rating} />
                </div>
            </div> 
        </section>
    )
}

export default Accomodation;