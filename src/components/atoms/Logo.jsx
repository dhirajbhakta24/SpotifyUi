import logo from "../../assets/Spotify logo.png"

export const Logo =(
    {   width,
        height
    }
)=>{
    return(
        <div className = "w-32 px-2 mb-5 ">
        <img
         src = {logo}
         className={`w-${width} h-${height}`}
         alt="logo"
        />
        </div>  
    )
}