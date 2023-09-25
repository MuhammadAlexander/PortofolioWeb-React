import{BiLogoHtml5,BiLogoCss3,BiLogoJavascript,BiLogoTailwindCss,BiLogoBootstrap,BiLogoReact,BiLogoNodejs} from 'react-icons/bi'
import Cardfragment from './Cardfragment'
import Webfragment from './Webfragment'
import Footer from './Footer'
import Header from '../Elements/Button/Header'
import Contactbar from './Contactbar'
import Emailinput from '../Elements/Input/Emailinput'
import {SiExpress} from 'react-icons/si'

const Mainmenu = (props) => {
    const {title} = props
    return(
        <>
         <div className="flex w-auto flex-col items-center justify-center mx-auto my-5 font-['roboto']">
         <div className='md:flex md:flex-row md:gap-10 md:justify-center md:items-center md:py-10 '>
         <img className='h-[300px] w-auto rounded-xl mt-2 md:h-[500px]' src="/Img/2 (2).jpg" alt=""/>
         <h1 className="font-['Montserrat'] font-bold text-white pt-2 md:text-4xl">Muhammad Alexander Ridwan Junior</h1>
            
         </div>
         <div className='flex justify-around gap-5 flex-col my-5 w-[200px]  md:flex md:flex-row md:w-max md:py-10' >
            <div className='flex justify-center items-center bg-slate-900 text-white font-bold rounded-xl h-12 md:text-2xl md:h-[100px] md:p-5 md:w-[300px]'>
               <a href="https://resume.showwcase.com/muhammadalexander.pdf?v=1695551084486?v=1695551104184" target='_blank' className='w-full h-full flex justify-center items-center'>Download Resume</a>
             </div>
           
            <div className='flex justify-center items-center bg-slate-900 text-white font-bold rounded-xl h-12 md:text-2xl md:h-[100px] md:p-5 md:w-[300px]'>
               <a href="#Contact" className="w-full h-full flex justify-center items-center font-['roboto']">Contact</a>
             </div>
            
            
         </div>

           <Contactbar></Contactbar>
         </div>



         <div className='h-16'  id='About me'>
           </div>
        <div className="text-center font-bold text-xl mt-3 text-white">
           <h1 className="underline font-['roboto'] text-2xl md:text-5xl">{title}</h1>
            
      <div className='md:flex md:w-full md:justify-evenly md:my-16 md:mx-auto '>
            <div className="flex justify-center md:w-1/2 lg:w-1/4">
           <img className="h-[300px] w-auto rounded-xl mt-2 md:h-auto md:m-auto lg:h-auto" src="/Img/1 (2).jpg" alt=""/>
            </div>
            <div>
            <h1 className="my-2 font-['roboto'] text-2xl">Profile description</h1>

<ul className='px-14 text-justify text-sm font-thin md:text-xl md:w-[500px] md:px-6'>
<li>Hello, I'm Muhammad Alexander, a student at Binus University, where I'm majoring in Information Systems. I have a strong interest in web development, specifically focusing on becoming a front-end web developer.</li>
<br/>
<li> In my studies, I've learned about various aspects of IT, like database management and software development. But I'm also learning web development skills like HTML, CSS, and JavaScript on my own. I take online courses, attend coding bootcamps, and work on practical projects to improve my skills.</li>
<br/>
<li> I love creating visually appealing and user-friendly websites. You can see some of my work in my portfolio. My goal is to become a skilled front-end web developer and contribute to making the web a better place for users. I'm excited about my journey and eager to keep learning and growing in this field. </li>
</ul>
            </div>
      
       </div>
            
       </div>

         <div className=" text-slate-300 text-center">

         
           <div className='h-16' id='Skills'>
           </div>
            <div className="py-3 font-bold text-white text-xl text-center underline" >
                <h1 className="font-['roboto'] text-2xl md:text-4xl"> Skills </h1>
                          
            </div>
            <div className='md:flex md:justify-evenly md:m-auto'>
            <div className='py-5 my-3 h-[360px] md:w-2/5 bg-slate-900 font-bold text-slate-300 rounded-xl'>
                    <h3 className='text-slate-400'>Front-End</h3>
                
                

               
                <div className='flex justify-around flex-wrap pt-5 w-full items-center'>
                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoHtml5 size={50} color='orange'/>
                   <p>HTML5</p>                    
                </div>  

                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoCss3 size={50} color='lightblue'/>
                   <p>CSS</p>
                </div>

                 </div>

                <div className='flex justify-around flex-wrap pt-5 '>  
                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoJavascript size={50} color='#f0db4f'/>
                   <p>Javascript</p>                  
                </div>     

                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoTailwindCss size={50} color='#07b6d5'/>
                   <p>Tailwind</p>
                </div> 
                
                </div>

                <div className='flex justify-around flex-wrap pt-5 '>  
                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoBootstrap size={50} color='#4e3475'/>
                   <p>Bootstrap</p>                  
                </div>    

                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoReact size={50} color='#4798ad'/>
                   <p>React</p>
                </div>
                </div>
                
              
             

                </div>
                <div className='py-5 my-3 h-[360px] md:w-2/5  bg-slate-900 font-bold text-slate-300 rounded-xl'>
                    <h3 className='text-slate-400'>Back-End</h3>
                    
                    <div className='flex justify-around flex-wrap pt-5 w-full items-center'>
                <div className='flex flex-col items-center w-[100px]'>
                <BiLogoNodejs size={50} color='orange'/>
                   <p>Nodejs</p>                    
                </div>  

                <div className='flex flex-col items-center w-[100px]'>
                <SiExpress size={50} color='lightblue'/>
                   <p>Expressjs</p>
                </div>

                 </div>
               
                    
           </div>


            </div>
                
           
           <div className='h-16' id='Portfolio'>
           </div>

           <div className='h-full font-bold text-xl'>
                  <div className=' m-auto h-16 w-full flex justify-center items-center'>
                    <h3 className="text-white underline font-['roboto'] text-2xl">Portfolio</h3>
                  </div>
                  <Cardfragment></Cardfragment>
            <br/>


      <Webfragment></Webfragment>
         <br/>
         
           </div>
           <Emailinput></Emailinput>

            </div>

        </>
    
    )
}

export default Mainmenu;