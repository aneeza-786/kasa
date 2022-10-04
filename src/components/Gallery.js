import products from "../data/logements.json"
import { Link } from "react-router-dom";
import Card from "./Card";

function Gallery() {
    return (
        <section className="products">
            {products.map((product) => {
            return (
                <article key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <Card image={product.cover} title={product.title} />
                </Link>
                </article>
            );
            })}
        </section>
    )
}

export default Gallery