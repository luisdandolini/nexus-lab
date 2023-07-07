import Header from "../../components/Header";
import Hero from "../../components/Hero";
import More from "../../components/More";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Process from "../../components/Process";
import Products from "../../components/Products";
import Footer from "../../components/Footer";

export default function Home() {
  return(
    <>
      <Header />
      <Hero />
      <More />
      <About />
      <Portfolio />
      {/* <Process />
      <Products />
      <Footer /> */}
    </>
  )
}