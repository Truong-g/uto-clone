import { Link } from "react-router-dom"
import { categoryRoutes } from "../dummyData"




function CategorySidebar() {
    return (
        <div className='w-full'>
            {
                categoryRoutes.map((item, index) => {
                    return (
                        <Link key={index} to={item.route} className='flex items-center py-2 hover:bg-[#ccc] rounded-[10px] px-1'>
                            <img src={item.img} className='w-[25px]' />
                            <span className='text-[0.8rem] font-[600] ml-4 text-[#555]'>{item.name}</span>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default CategorySidebar