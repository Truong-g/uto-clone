import { Link } from "react-router-dom"


const CommentItem = () => {
    return (
        <div className="flex items-center comment__item">
            <div className="mr-2">
                <img src="https://uto.vn/storage/images/no-avatar.png" className="w-[45px] h-[45px] rounded-full" />
            </div>
            <div className="flex-1 ">
                <div className="inline-block bg-[#dddccc] py-1 px-3 rounded-xl">
                    <Link to="" className="text-[#333] font-[600] block hover:text-main">Unie</Link>
                    <p className="text-[0.9rem] w-full text-[#333]">tôi đã sử dụng qua sản phẩm này</p>
                </div>

            </div>
        </div>
    )
}


function Comments() {
    return (
        <div className="w-full">
            <CommentItem />
            <CommentItem />

            <CommentItem />
            <CommentItem />
            <CommentItem />

        </div>
    )
}

export default Comments