import {LuLoaderCircle} from "react-icons/lu";

export const Loader = ()=>{
    return(
        <div className={'w-full h-full flex items-center justify-center'}>
            <LuLoaderCircle className={'animate-spin'} size={30}/>
        </div>
    )
}