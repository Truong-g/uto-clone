import { Link } from 'react-router-dom'
import { SupportSection } from '../components'
import { LayoutComponent } from '../Layouts'

function ServicePage() {
  return (
    <div className='w-full'>
      <LayoutComponent title="Dịch vụ" titleColor="border-main">
        <div className="grid grid-cols-3 gap-5">
          <div className="w-full">
            <Link to=""
              className="relative shadow-sd-main bg-cover bg-center bg-no-repeat pt-[80%] block rounded-xl"
              style={{ backgroundImage: `url("https://uto.vn/storage/beta/assets/images/h6.jpg")` }}
            >
              
              <div className='absolute shadow-lg bottom-0 left-0 w-full bg-white py-2 rounded-xl flex items-center justify-center'>
                  <img src="https://uto.vn/storage/beta/assets/images/ser_web1.png" className='w-[25px] mr-2' />
                  <span className='text-[1.1rem] font-[600] text-main'>Web builder</span>
              </div>

            </Link>
          </div>
          <div className="w-full">
            <Link to=""
              className="relative shadow-sd-main bg-cover bg-center bg-no-repeat pt-[80%] block rounded-xl"
              style={{ backgroundImage: `url("https://uto.vn/storage/beta/assets/images/h10.jpg")` }}
            >
              
              <div className='absolute shadow-lg bottom-0 left-0 w-full bg-white py-2 rounded-xl flex items-center justify-center'>
                  <img src="https://uto.vn/storage/beta/assets/images/ser_web1.png" className='w-[25px] mr-2' />
                  <span className='text-[1.1rem] font-[600] text-main'>Web builder</span>
              </div>

            </Link>
          </div>
          <div className="w-full">
            <Link to=""
              className="relative shadow-sd-main bg-cover bg-center bg-no-repeat pt-[80%] block rounded-xl"
              style={{ backgroundImage: `url("https://uto.vn/storage/beta/assets/images/h11.jpg")` }}
            >
              
              <div className='absolute shadow-lg bottom-0 left-0 w-full bg-white py-2 rounded-xl flex items-center justify-center'>
                  <img src="https://uto.vn/storage/beta/assets/images/ser_web1.png" className='w-[25px] mr-2' />
                  <span className='text-[1.1rem] font-[600] text-main'>Web builder</span>
              </div>

            </Link>
          </div>
          <div className="w-full">
            <Link to=""
              className="relative shadow-sd-main bg-cover bg-center bg-no-repeat pt-[80%] block rounded-xl"
              style={{ backgroundImage: `url("https://uto.vn/storage/beta/assets/images/h9.jpg")` }}
            >
              
              <div className='absolute shadow-lg bottom-0 left-0 w-full bg-white py-2 rounded-xl flex items-center justify-center'>
                  <img src="https://uto.vn/storage/beta/assets/images/ser_web1.png" className='w-[25px] mr-2' />
                  <span className='text-[1.1rem] font-[600] text-main'>Web builder</span>
              </div>

            </Link>
          </div>
        </div>
      </LayoutComponent>

      <SupportSection />
    </div>
  )
}

export default ServicePage