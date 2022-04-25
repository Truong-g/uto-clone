import { Link } from "react-router-dom"
import { CourseCard, Hero, SupportSection } from "../components"

function TrainningPage() {


  return (
    <div className="w-full">
      <Hero />
      <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
        <div className="grid grid-cols-2 gap-[15px]">
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
          <Link to="" className="block w-full p-[10px] bg-[#D4DFE7] hover:text-main">
            <div className="flex items-center justify-between">
              <h3 className="font-[600]">Đào tạo nội bộ UTO</h3>
              <img src="https://uto.vn/storage/education/images/ic_edu1.png" className="w-[38px] h-[38px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
        <div className="grid grid-cols-2 gap-[15px]">
          <div className="w-full aspect-square relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none"
              src="https://www.youtube.com/embed/R9jaKsPms_k"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div className="w-full aspect-square relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full border-none"
              src="https://www.youtube.com/embed/arufG1XZWxc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
      <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
        <h3 className="text-[1.2rem] text-[#333] border-b-[1px] mb-3 border-solid border-[#cccccc] uppercase">Khóa học nổi bật</h3>
        <div className="grid grid-cols-2 gap-[15px]">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />

        </div>
      </div>
      <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
        <h3 className="text-[1.2rem] text-[#333] border-b-[1px] mb-3 border-solid border-[#cccccc] uppercase">Tất cả khóa học</h3>
        <div className="grid grid-cols-2 gap-[15px]">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />

        </div>
      </div>

      <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
        <h3 className="text-[1.2rem] text-[#333] border-b-[1px] mb-3 border-solid border-[#cccccc] uppercase">4 LÝ DO BẠN NÊN HỌC ONLINE TẠI STARTUP EDUCATION</h3>
        <div className="grid grid-cols-2 gap-[15px]">
          <div className="w-full">
            <div className="text-center">
              <div className="w-[100px] p-[10px] inline-block h-[100px]">
                <img src="https://uto.vn/storage/education/images/h5.jpg" className="w-full" />
              </div>
            </div>
            <h3 className="text-[#333] font-[600] text-[1.2rem] text-center">Giảng viên uy tín</h3>
            <div className="h-[48px]">
              <p className="h-full category_card">Ứng dụng thực tế, bài tập rèn luyện thực hành tạo ra kết quả thực hành tạo ra kết quả</p>
            </div>
          </div>
          <div className="w-full">
            <div className="text-center">
              <div className="w-[100px] p-[10px] inline-block h-[100px]">
                <img src="https://uto.vn/storage/education/images/h5.jpg" className="w-full" />
              </div>
            </div>
            <h3 className="text-[#333] font-[600] text-[1.2rem] text-center">Giảng viên uy tín</h3>
            <div className="h-[48px]">
              <p className="h-full category_card">Ứng dụng thực tế, bài tập rèn luyện thực hành tạo ra kết quả thực hành tạo ra kết quả</p>
            </div>
          </div>
          <div className="w-full">
            <div className="text-center">
              <div className="w-[100px] p-[10px] inline-block h-[100px]">
                <img src="https://uto.vn/storage/education/images/h5.jpg" className="w-full" />
              </div>
            </div>
            <h3 className="text-[#333] font-[600] text-[1.2rem] text-center">Giảng viên uy tín</h3>
            <div className="h-[48px]">
              <p className="h-full category_card">Ứng dụng thực tế, bài tập rèn luyện thực hành tạo ra kết quả thực hành tạo ra kết quả</p>
            </div>
          </div>
          <div className="w-full">
            <div className="text-center">
              <div className="w-[100px] p-[10px] inline-block h-[100px]">
                <img src="https://uto.vn/storage/education/images/h5.jpg" className="w-full" />
              </div>
            </div>
            <h3 className="text-[#333] font-[600] text-[1.2rem] text-center">Giảng viên uy tín</h3>
            <div className="h-[48px]">
              <p className="h-full category_card">Ứng dụng thực tế, bài tập rèn luyện thực hành tạo ra kết quả thực hành tạo ra kết quả</p>
            </div>
          </div>
        </div>

      </div>


      <SupportSection />
    </div>
  )
}



export default TrainningPage