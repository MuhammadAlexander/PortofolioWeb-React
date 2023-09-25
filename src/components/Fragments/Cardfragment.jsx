import Card from "../Elements/Input/Card";
import Card1 from "../Elements/Input/Card1";
import Card2 from "../Elements/Input/Card2";
import {AiFillPlayCircle} from 'react-icons/ai';
const Cardfragment = () =>{
return(
   <>
   <div>
   <div className="lg:flex lg:m-auto lg:w-full lg:justify-evenly">
   <div className='rounded-xl w-auto h-auto bg-slate-900 py-3 text-slate-300 lg:w-2/5'>
     <h1>UI/UX</h1>
     <h3 className="text-slate-400">Let'sWorkouts</h3>
     <Card card={["1","2","3","4","5","6"]}/>                  
      <h1>Description</h1>
      <div className='font-thin text-justify text-sm px-16'>
      <p>My first UI/UX project was the Let'sWorkouts mobile app. The Let'sWorkouts mobile app UI/UX design project aims to deliver an outstanding fitness app experience that encourages users to stay committed to their fitness goals while enjoying a visually appealing and user-friendly interface. The end product will empower users to achieve their fitness objectives and foster a sense of community within the fitness enthusiast community.</p>                     
      </div>
      <div className="w-2/5  mx-auto bg-slate-950 my-5 rounded-xl">
      <a className=" py-3 text-white flex justify-center items-center gap-2" href="https://www.figma.com/proto/5erfggnJsgzuo2hgQ9Nohu/Go-Workout?type=design&node-id=4-2&t=YkGBD5av5pWnz0yQ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A2" target="_blank">Preview  <AiFillPlayCircle color="white"/></a>
      </div>
     </div>

    <br/>

     <div className='rounded-xl w-auto h-auto bg-slate-900 py-3 text-slate-300 lg:w-2/5'>
     <h1>UI/UX</h1>
    <h3 className="text-slate-400">Kerjo</h3>
     <Card1 card1={["1","2","3","4","5","6"]}/>                 
      
      <h1>Description</h1>
      <div className='font-thin text-justify text-sm px-16 '>
      <p>On my second UI/UX project was the Kerjo mobile app. Kerjo is a mobile application designed to simplify the job search process and connect job seekers with potential employers. The primary objective of this project is to create an intuitive and user-friendly UI/UX design for the Kerjo mobile app, enhancing the overall job-seeking experience and increasing engagement.</p>                     
      </div>
      <div className="w-2/5  mx-auto bg-slate-950 my-5 rounded-xl">
        <a className="py-3 text-white flex justify-center items-center gap-2" href="https://www.figma.com/proto/w3P7zGvPK3SHQgPKiOs2mc/Final-project-UX-Kerjo-Apps?type=design&node-id=51-171&t=mBOdWJPaCJrqMHLz-0&scaling=scale-down&page-id=51%3A166&starting-point-node-id=51%3A171" target="_blank">Preview  <AiFillPlayCircle color="white"/></a>
      </div>
     </div>
     </div>
   

  <br/>

     <div className='rounded-xl w-auto h-auto bg-slate-900 py-3 text-slate-300 lg:w-[90%] lg:m-auto'>
     <h1>UI/UX</h1>
    <h3 className="text-slate-400">PinArt</h3>
     <Card2 card2={["1","2","3","4","5","6"]}/>                 
      <h1>Description</h1>
      <div className='font-thin text-justify text-sm px-16'>
      <p>My third UI/UX project was the PinArt mobile app. The Pinart mobile app UI/UX design project aims to deliver a visually engaging and user-centric platform that inspires creativity and encourages users to share their visual content with a like-minded community. The final product will empower users to express themselves through visual storytelling while fostering meaningful interactions and engagement within the Pinart community.</p>                     
      </div>
      <div className="w-2/5  mx-auto bg-slate-950 my-5 rounded-xl lg:w-1/3">
      <a className="py-3 text-white flex justify-center items-center gap-2" href="https://www.figma.com/proto/4iT4nVE0PzuQ84OHSKSTFi/PinArt-UI%2FUX?type=design&node-id=6-3&t=RVYduYmzwP5GAcAe-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A236" target="_blank">Preview  <AiFillPlayCircle color="white"/></a>
      </div>
     </div>
   
  
   </div>
    

   </>
   
)
}

export default Cardfragment;