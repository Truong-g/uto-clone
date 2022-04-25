import { Link } from "react-router-dom"
import Comments from "./Comments"



function PostCard() {
    return (
        <div className='p-[10px] bg-white rounded-[6px] shadow-sd-main mb-5'>
            <div className="w-full">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[45px] h-[45px] rounded-full" />
                    </div>
                    <div>
                        <Link to="" className="text-[#333] font-[600] block hover:text-main">Unie</Link>
                        <span className="text-[0.8rem] text-[#777]">Khoảng 4 giờ trước</span>
                    </div>
                </div>
                <div className="w-full my-5">
                    <Link to="" className="text-[#333] font-[600] mb-3 block hover:text-main">Mặt nạ trắng da, ngăn ngừa lão hóa, thải độc cho da</Link>
                    <p className="text-[#555] text-[1rem]">
                        Sắp đến Tết rồi, cùng làm đẹp thôi các nàng ơi
                        Shop mình còn nhiều mặt hàng về làm đep lắm nè,
                        ghé xem và rinh về các sản phẩm ưng ý nhé !!! https://uniehouse.uto.vn/
                    </p>
                </div>
                <div className="w-full mb-3">
                    <img src="https://uto.vn/storage/uploads/63/2021/11/30/61a5a7b5a7e8c" className="w-full" />
                </div>
                <div className="flex justify-between items-center py-1 px-5 border-b-[1px] border-solid border-[#ddd]">
                    <div className="flex text-[#333] text-[0.9rem]">
                        <strong>10</strong>
                        <span className="ml-1">lượt thích</span>
                    </div>
                    <div className="flex items-center">
                        <div className="flex text-[#333] text-[0.9rem]">
                            <strong>6</strong>
                            <span className="ml-1">ình luận</span>
                        </div>
                        <div className="flex text-[#333] text-[0.9rem] ml-7">
                            <strong>1</strong>
                            <span className="ml-1">lượt chia sẻ</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center py-1 px-5 border-b-[1px] border-solid border-[#ddd]">
                    <button className="flex items-center py-2 px-3 text-[0.9rem] hover:bg-gray-main rounded-[10px]">
                        <i className="far fa-thumbs-up fa-fw" />
                        <span>Thích</span>
                    </button>
                    <button className="flex items-center py-2 px-3 text-[0.9rem] hover:bg-gray-main rounded-[10px]">
                        <i className="far fa-comments fa-fw" />
                        <span>Bình luận</span>
                    </button>
                    <button className="flex items-center py-2 px-3 text-[0.9rem] hover:bg-gray-main rounded-[10px]">
                        <i className="fas fa-share fa-fw" />
                        <span>Chia sẻ</span>
                    </button>
                </div>
                <div className="my-5 w-full">
                    <div className="w-full relative">
                        <input type="text" className="w-full h-[35px] bg-gray-main rounded-full pl-3" placeholder="Viết bình luận..." />
                        <button className="w-[45px] absolute top-0 right-0 bottom-0 text-main flex justify-center items-center h-[35px] rounded-full">
                            <i className="fas fa-paper-plane fa-fw"></i>
                        </button>
                    </div>
                </div>
                <Comments />
            </div>
        </div>
    )
}

export default PostCard