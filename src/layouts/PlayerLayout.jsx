import { Sidebar } from "../components/organisms/Sidebar"

export const PlayerLayout =()=>{
    return(
        <div
        className="w-screen h-screen relative bg-red-900">

        {/*Sidebar */}
        <div className="absolute top-0 w-64 bg-green-900 h-screen">
        <Sidebar/>
        </div>


        {/* Main Board Component */}
        <div>

        </div>

        {/*Player */}
        <div className="absolute bottom-0 left-0 w-screen h-[80px] bg-gray-900">

        </div>

        </div>
    )
}