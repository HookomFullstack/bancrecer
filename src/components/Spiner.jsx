import logo from '../assets/logo_footer.png'
export const Spiner = () => {
  return (
    <div className="bg-white  fixed h-screen w-screen left-0 top-0 flex items-center justify-center">
      
      <img className='animate-pulse' src={logo} alt="" />
      
    </div>
  )
}
