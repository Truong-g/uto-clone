import { Link } from "react-router-dom"



function CourseCard() {

  

  return (
    <div className="w-full">
      <Link to="" className="pt-[70%] bg-center bg-cover bg-no-repeat block hover:opacity-[0.8]" style={{ backgroundImage: `url("https://uto.vn/storage/uploads/posts/2022/01/03/61d2b6b478c93")` }} />
      <div className="border-[1px] border-solid border-[#dcdcdc] p-[8px]">
        <Link to="" className="text-[1.1rem] leading-[22px] uppercase mt-2 hover:text-main">
          Nhật ký ngày thành lập cùng tôi và ken
        </Link>
        <span className="text-[0.9rem] font-[600] text-[#444]">Ken Bay</span>
        <div className="text-right mt-2">
          <span className="text-[1rem] font-[600] text-red-600">3,000,000 vnđ</span>
        </div>
      </div>

    </div>
  )
}

export default CourseCard