import section2 from "../assets/section2.png";
import Collapse from "../components/Collapse";
import categories from "../data/aboutData.json";

function About() {
    return (
        <div>
            <img src={section2} alt='section 2' className='section' />
            <section className="categories">
                <CollapseAbout />
            </section>
        </div>
    )
}

const CollapseAbout = () => {
    return (categories.map(category =>
    <Collapse key={category.id} num={category.id} title={category.title} content={category.content} />))}


export default About