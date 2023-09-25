const Card = (props) => {
    const {card} = props
    return(
        <div className="w-full h-max flex flex-wrap px-10 gap-2 items-center justify-center lg:w-4/5 lg:m-auto lg:py-7">
        {card.map((pic,index)=>{
            return(
                <div className="w-[100px]">
        <img src={`https://github.com/MuhammadAlexander/image-api/blob/main/letsworkoutbgremove/${pic}letsworkout-removebg-preview.png?raw=true`} key={index} alt=""/>
                </div>
            )
        })}
        </div>
    )
}



export default Card;