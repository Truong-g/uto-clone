

import { Link } from 'react-router-dom'

function SupportSection() {
  return (
    <footer>
      <div className='p-[15px] bg-white pt-[40px] rounded-t-[6px] shadow-sd-main'>
        <h3 className='font-bold mb-[10px] text-[1.5rem]'>Hỗ trợ</h3>
        <div className='mt-1'>
          <Link to="" className="hover:text-main">Chính sách trả hàng</Link>
        </div>
        <div className='mt-1'>
          <Link to="" className="hover:text-main">Điều khoản dịch vụ</Link>
        </div>
        <div className='mt-1'>
          <Link to="" className="hover:text-main">Điều khoản dịch vụ mua bán UTO</Link>
        </div>
        <div className='mt-1'>
          <Link to="" className="hover:text-main">Danh mục yêu cầu hồ sơ pháp lý và nhà bán</Link>
        </div>
        <div className='mt-1'>
          <Link to="" className="hover:text-main">Chính sách vận chuyển</Link>
        </div>
        <h3 className='font-bold mb-[10px] text-[1.5rem] mt-1'>Chúng tôi trên mạng xã hội</h3>
        <div className="flex items-center mb-[30px]">
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/ic5.png" className='block w-[35px] h-[35px] rounded-full' />
          </Link>
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/ic6.png" className='block w-[35px] h-[35px] rounded-full' />
          </Link>
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/ic9.png" className='block w-[35px] h-[35px] rounded-full' />
          </Link>
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/ic10.png" className='block w-[35px] h-[35px] rounded-full' />
          </Link>
        </div>
        <div className="flex items-center mb-[15px]">
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/app1.png" className='block h-[40px] rounded-[6px]' />
          </Link>
          <Link to="" className='mr-3'>
            <img src="https://uto.vn/storage/beta/assets/images/app2.png" className='block h-[40px] rounded-[6px]' />
          </Link>
        </div>
        <div className="border-[1px] border-solid border-[#444] my-3" />
        <div className="flex items-center">
          <div className='w-[60px] h-[60px] bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url("https://uto.vn/storage/beta/assets/images/ic_sp1.png")` }} />
          <div className='ml-3'>
            <h3 className='text-[1.1rem]'>Tổng đài hỗ trợ</h3>
            <Link to="tel:1900886633" className='text-[1.5rem] font-[600]'>1900 88 66 33</Link>
          </div>
        </div>
        <div className="flex items-center mt-3 mb-7">
          <div className='flex-[3] mr-2'>
            <p>
              Đăng ký để cập nhật thông tin mới nhất về các chương trình khuyến mãi và nhận được voucher hấp dẫn
            </p>
          </div>
          <div className='flex-[2] ml-2'>
            <div className='relative'>
              <input type="text" className='w-full h-[40px] border-[1px] border-solid border-[#555] border-t-0 border-l-0 border-r-0 pl-1 pr-[45px]' placeholder='Email...'/>
              <span className='inline-flex absolute w-[40px] h-[40px] right-0 top-0 justify-center items-center'><i className="far fa-envelope"></i></span>
            </div>
          </div>

        </div>
      </div>
      <div className='p-[15px] bg-main'>
          <div className="flex justify-between items-center text-white">
            <span>© 2022 UTO</span>
            <span>Nâng tầm thương hiệu của bạn</span>
          </div>
      </div>

    </footer>
  )
}

export default SupportSection