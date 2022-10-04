import section2 from "../assets/section2.png";
import Collapse from "../components/Collapse";

function About() {
    return (
        <div>
            <img src={section2} alt='section 2' className='section' />
            <Collapse/>
        </div>
    )
}

export default About