import Header from "../Elements/Button/Header";

const Navbar = () => {
    return(
        <>

        <div className="w-screen flex h-14">
        </div>
        <div className="fixed font-bold w-screen h-14 flex justify-evenly gap-3 items-center py-3 bg-slate-900 text-slate-100  top-0 left-0 font-['roboto'] md:text-2xl md:justify-around lg:justify-between">
           <div className="flex">
           <a className="px-5 font-['Montserrat'] text-slate-200 text-xl md:text-3xl" href="#Home">Alexander</a>
           </div>
            <Header menus={["About me", "Skills", "Portfolio"]} classname=" h=[100px] w-max text-sm font-bold p-1 mx-auto md:text-2xl "></Header>
        </div>
        
      
        </>
    )
}

export default Navbar;