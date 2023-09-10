import Header from "../Components/Header/Header"
import Hero from "./Components/Hero"
import Work from "./Components/Work"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "../Components/Footer/Footer"
import Portfolio from "./Components/Portfolio/Portfolio"
import PortfolioData from "./Components/Portfolio/PortolioData"


export default function Homepage() {
  return (
    <div className=" ">
        <Header />
        <Hero />
        <Work />
        <About />
        <Portfolio PortfolioData={PortfolioData} />
        <Contact />
        <Footer />
    </div>
  )
}
