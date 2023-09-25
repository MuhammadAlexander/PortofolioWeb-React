import {AiOutlineMail} from 'react-icons/ai'
const Emailinput = ()=>{
    return(
        <div id='Contact'>
        <h1 className="font-bold  text-white font-['roboto'] text-2xl">Contact Me</h1>  
        <div className=" h-12 w-4/5 mx-auto bg-slate-950 my-7 rounded-xl  text-white md:w-2/5 lg:w-1/4">
        <a className="py-3 text-white flex justify-center items-center gap-3" href = "mailto: sanderjunior550@gmail.com"><AiOutlineMail size={25}/> sanderjunior550@gmail.com</a>
        </div>
      
        </div>
    )

}

export default Emailinput;