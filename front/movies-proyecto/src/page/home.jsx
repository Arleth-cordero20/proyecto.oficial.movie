import {Navbar }from "../components/navBar";
import {Footer} from "../components/footer"
import {Carrusel} from "../components/carrusel" 

export function home() {
    return(
        <>
        <Navbar/>
        <Carrusel/>
        <Footer/>
        </>
    )
}