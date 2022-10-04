import section1 from "../assets/section1.png"
import Gallery from "../components/Gallery"
import "../styles/Home.css"


function Home() {
  return (
    <div>
      <img src={section1} alt='section 1' className='section' />
      <Gallery/>
    </div>
  )
}

export default Home
