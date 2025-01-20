export const TokenInput = ({handleBlur, handleChange, token1}) => {

  return (
      <div className='flex items-center justify-center my-4'>
        <input 
          required
          className="
            w-full text-[16px] border-2 h-[40px] text-[#495057] px-[12px] py-[6px] leading-[22.8px] border-[rgb(204,204,204)] transition-border-color transition-shadow duration-150 ease-in-out 
            focus:shadow-[0_0_6px_#f8b9b7] focus:text-[rgb(189 189 189)] focus:bg-[#fafad2]
            placeholder:leading-[22.8px] placeholder:font-light placeholder:text-[rgb(189 189 189)]
          "
          name="token1"
          placeholder='Ingrese el código de seguridad recibido'
          onBlur={handleBlur}
          
          onChange={handleChange}
          type="text"
          inputMode="text" 
          value={token1}
        />
      </div>
    )
}
