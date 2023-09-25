const Header = (props) => {
    const {menus, classname} = props
    return(
        
        <ul className="flex gap-2 justify-between items-center md:gap-10 lg:pr-10">
        {menus.map((menu,index)=>{
            return(
                <li key={index} className={classname}><a href={`#${menu}`}>{menu}</a></li>
                
            )
        })}
        
        
        </ul>
    )
}

export default Header