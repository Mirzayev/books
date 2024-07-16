import {Modal} from "antd";
import {useNavigate} from "react-router-dom";

export default function ProfilModal({isModalOpen}){


    const navigate = useNavigate()
const handleLogout =  () => {

        navigate('/login')
}

    return(
       <div className={'flex justify-center '}>
           <div>
               <div className={'flex justify-between items-center gap-4 cursor-pointer my-2 duration-200 font-medium hover:bg-slate-100 px-5 py-1'}>
                   <p>Edit name</p>
                   <i className="fa-solid fa-pencil"></i>
               </div>
               <div className={'flex justify-between items-center gap-4 cursor-pointer my-2 duration-200 font-medium hover:bg-slate-100 px-5 py-1'}>
                   <p>Change image</p>
                   <i className="fa-solid fa-image text-blue-400"></i>
               </div>
               <div onClick={() => handleLogout()} className={'flex justify-between items-center gap-4 cursor-pointer my-2 duration-200 font-medium hover:bg-slate-100 px-5 py-1'}>
                   <p >Logout</p>
                   <i className="fa-solid fa-right-from-bracket text-red-500 "></i>
               </div>
           </div>
       </div>
    )
}