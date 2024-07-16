import back from '../../assets/image/background-effect.png'
import not_found from '../../assets/image/notFound.png'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

export default function NotFound(){

    useEffect(() => {

    }, []);


    return(
        <div className={' h-screen '}>
                <img className={'h-screen absolute z-[-10]'} src={back} alt=""/>
                <div className={'flex z-20 justify-center items-center h-full flex-col px-10'}>
                    <img className={' flex  z-20  object-contain'} src={not_found} alt=""/>
                <div className={'mt-10 flex gap-4'}>
                    <NavLink className={'px-4 py-2 rounded-md  lg:px-10   lg:py-[10px] bg-[#6200EE] text-white'} to={'/'}>Go Home Page </NavLink>
                <button onClick={() => window.location.reload()} className={'px-4 py-2 rounded-md  lg:px-10 active:bg-[#6200EE]  active:text-white   lg:py-[10px] border-[1px] border-[#6200EE] '}>Reload Page </button>
                </div>
                </div>

        </div>
    )
}