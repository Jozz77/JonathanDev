import Header from "../Components/Header/Header"
import Hero from "./Components/Hero"
import Work from "./Components/Work"
import About from "./Components/About/About"
import Contact from "./Components/Contact"
import Footer from "../Components/Footer/Footer"
import Portfolio from "./Components/Portfolio/Portfolio"
import Blog from "./Components/Blog/Blog"


export default function Homepage() {
  return (
    <div className=" homepage ">
        <Header />
        <Hero />
        <Work />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}
