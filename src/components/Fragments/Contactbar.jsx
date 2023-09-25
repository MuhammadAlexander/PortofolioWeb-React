import {BsLinkedin,BsGithub,BsFacebook,BsInstagram} from 'react-icons/bs'

const Contactbar = () => {
    return(
        <>

       <div className="text-white font-bold text-xs mx-1 h-[100px] gap-4 md:h-[200px]">
            <div className="flex justify-center items-center font-bold my-4 font-['roboto'] text-2xl text-slate-200 md:text-5xl">
            <h1 >Sosial Media</h1>
            </div>
            <div className='flex gap-5 md:gap-10 md:py-5'>
                    <div className=''>
            <a href="https://www.linkedin.com/in/muhammadalexander/?locale=en_US" target="_blank"><BsLinkedin size={35} color='#0a66c2'/></a>
            </div>

            <div>
            <a href="https://github.com/MuhammadAlexander" target="_blank"><BsGithub size={35}/></a>
            </div>

            <div>
            <a href="https://www.instagram.com/_alexxrj/" target="_blank"><BsInstagram size={35}/></a>
            </div>

            <div>
            <a href="https://www.facebook.com/sander.junior.10" target="_blank"><BsFacebook size={35} color='#0766ff'/></a>
            </div>


        </div>
            </div>
    
        </>
     
    )
}

export default Contactbar;