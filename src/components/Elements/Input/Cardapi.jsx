const Cardapi = (props) => {
    const {imglist} = props
    return(
        <div className="w-full h-max flex justify-center items-center flex-wrap gap-3">
            {imglist.map((pic,index)=>{
                return(

            <img className="w-3/4 " src={`https://github.com/MuhammadAlexander/image-api/blob/main/ApiFIlmSearch/${pic}.JPG?raw=true`} key={index} alt=""/>

                )
                            
            })}
        </div>
    )
}

export default Cardapi