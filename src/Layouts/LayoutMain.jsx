import { Link, useLocation } from "react-router-dom"
import {
    CategorySidebar,
    LeftSidebar
} from "../components"



function LayoutMain({ children }) {
    const location = useLocation()
    const pathName = location.pathname
    return (
        <div className='xl:max-w-[1400px] mx-auto h-full'>
            <div className='w-full flex h-full'>
                <div className="flex-[1] h-full overflow-y-scroll side__bar">
                    <LeftSidebar />
                    <div className="h-[1px] bg-[#bbb] my-5" />
                    {
                        pathName === "/" && <CategorySidebar />
                    }
                </div>
                <div className="flex-[3] h-full">
                    <div className="xl:w-[600px] 2xl:w-[720px] mx-auto h-full overflow-y-scroll hide__scrollbar">
                        {children}
                    </div>
                </div>
                <div className="flex-[1] h-full overflow-y-scroll side__bar">
                    <h3 className="font-bold mb-[10px]">Thành viên nổi bật</h3>
                    <div className="w-full px-[10px] mb-[40px]">
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                        <Link className="flex items-center px-[10px] py-[4px] hover:bg-[#ccc] rounded-[6px]" to="">
                            <div className="inline-block mr-[12px]">
                                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[35px] h-[35px] rounded-full" />
                            </div>
                            <span className="text-[0.8rem] font-[600]">Nguyễn Phương Oanh</span>
                        </Link>
                    </div>
                    {
                        pathName === "/" && (
                            <div className="px-[10px]">
                                <div className="w-full">
                                    <img src="https://uto.vn/storage/uploads/2021/12/02/61a84e265fd6f.jpg" className="w-full" />
                                </div>
                                <div className="w-full">
                                    <img src="https://uto.vn/storage/uploads/2021/12/02/61a84d4dda5bc.jpg" className="w-full mt-5" />
                                </div>
                            </div>
                        )
                    }

                    <h3 className="font-bold mt-[10px]">Thành viên nổi bật</h3>
                    <div className="flex items-center my-[15px]">
                        <Link to="" className='mr-3'>
                            <img src="https://uto.vn/storage/beta/assets/images/app1.png" className='block h-[30px] rounded-[6px]' />
                        </Link>
                        <Link to="">
                            <img src="https://uto.vn/storage/beta/assets/images/app2.png" className='block h-[30px] rounded-[6px]' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutMain