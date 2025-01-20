import { Navigation } from './Navigation'
import fondo from '../../assets/fondo.jpg'
import digital from '../../assets/digital.png'
import { Footer } from '../../layouts/Footer'
export const Layout = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen  "
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className=' flex items-start justify-center w-full sm:h-[calc(100vh-110px)] h-screen sm:mb-0'>
        <div className='bg-[#ffffff66] p-[20px] relative mt-[25px] max-w-[540px] w-full'>
          <div className='relative z-0'> 
            <div className='h-[65px] flex top-0  items-center justify-center '>
              <img className='absolute h-[80px] sm:h-auto' src={digital} alt="" />
            </div>
          </div>
          <div className='bg-white relative z-50 p-[20px] '>
            <Navigation/> 
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
