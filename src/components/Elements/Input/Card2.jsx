const Card2 = (props)=>{
 const {card2} = props
        return(
            <div className="w-full h-max flex flex-wrap px-10 gap-2 items-center justify-center lg:m-auto lg:gap-5 lg:py-7">
            {card2.map((pic,index)=>{
                return(
                    <div className="w-[100px]">
            <img src={`https://github.com/MuhammadAlexander/image-api/blob/main/pinartbgremove/${pic}pinart-removebg-preview.png?raw=true`} key={index} alt=""/>
                    </div>
                )
            })}
            </div>
        )
    
}

export default Card2