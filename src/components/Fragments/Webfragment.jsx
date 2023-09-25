import Cardapi from "../Elements/Input/Cardapi";

const Webfragment = () =>{
    return(
        <>
     <div className="rounded-xl w-full h-auto m-auto  bg-slate-900 text-slate-300 pb-5 lg:w-[90%] lg:m-auto">
      <h1>Web Project</h1>
           <h1>Static Web Portfolio</h1>
           <img className="w-3/4 m-auto" src="Img/StaticWebPorto.JPG" alt=""/>
           <h3>Description</h3>
           <div className="font-thin text-justify text-sm px-16 lg:w-1/2 lg:m-auto">
        <p>This is my first static web portfolio. I'm building this website using HTML, TailwindCSS, and Javascript.</p>
           </div>
        <div className=" h-12 w-2/3 mx-auto bg-slate-950 my-5 rounded-xl lg:w-1/3">
           <a className="py-3 text-white flex justify-center items-center" href="https://github.com/MuhammadAlexander/StaticWebPortfolio" target="_blank">View Repository</a>

        </div>
       </div>
       

       <br/>

       <div className="rounded-xl w-full h-auto m-auto  bg-slate-900 text-slate-300 pb-5 lg:w-[90%] lg:m-auto">
      <h1>Web Project</h1>
           <h1>Movie Search Website</h1>
           <Cardapi imglist={["1","2","3"]}/>
           <h3>Description</h3>
           <div className="font-thin text-justify text-sm px-16 lg:w-1/2 lg:m-auto">
                <p>Introducing my web project: a simple and efficient movie search website. Designed with simple navigation, this platform allows users to explore and search movies and movie details easily.
        I'm using HTML, TailwindCSS, and Javascript to build this website.</p>
           </div>
        <div className=" h-12 w-2/3 mx-auto bg-slate-950 my-5 rounded-xl lg:w-1/3">
        <a className="py-3 text-white flex justify-center items-center" href="https://github.com/MuhammadAlexander/JS-MovieSearch" target="_blank">View Repository</a>
        </div>
       </div>


        </>
  

    )
}

export default Webfragment;