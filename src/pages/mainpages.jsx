import Mainmenu from "../components/Fragments/Mainmenu";
import Navbar from "../components/Fragments/Navbar";
import Contactbar from "../components/Fragments/Contactbar";
import Cardfragment from "../components/Fragments/Cardfragment";
import Footer from "../components/Fragments/Footer";

const Mainpages = () => {
    return (
        <>
        <div className="overflow-hidden"  id="Home">
        <Navbar></Navbar>
        <div className="h-full w-full bg-slate-700 container mx-auto">
        <Mainmenu title="About me"></Mainmenu>
        </div>
        <Footer></Footer>
        </div>
        </>
    )
}

export default Mainpages;