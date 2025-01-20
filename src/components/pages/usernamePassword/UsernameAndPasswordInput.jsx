import { useState } from "react";
import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector";

export const UsernameAndPasswordInput = ({
  username, password, error, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
  selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  
  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <>

      <div className="w-full flex flex-col gap-6">
          
        <div className="relative">
          <input 
            name="username"
            value={username}
            onBlur={handleBlur}
            autoComplete={false}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
            className="
              w-full text-[16px] border-2 h-[40px] text-[#495057] px-[12px] py-[6px] leading-[22.8px] border-[rgb(204,204,204)] transition-border-color transition-shadow duration-150 ease-in-out 
              focus:shadow-[0_0_6px_#f8b9b7] focus:text-[rgb(189 189 189)] focus:bg-[#fafad2]
              placeholder:leading-[22.8px] placeholder:font-light placeholder:text-[rgb(189 189 189)]
            "
          />
          
        </div>
        
        
        <div className="flex  h-[40px]">

          <input 
            id="passwordLabel"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            autoComplete={false}

            placeholder="Ingresa tu contraseña"
            className="
              w-full text-[16px] border-2 text-[#495057] px-[12px] py-[6px] leading-[22.8px] border-[rgb(204,204,204)] transition-border-color transition-shadow duration-150 ease-in-out 
              focus:shadow-[0_0_6px_#f8b9b7] focus:text-[rgb(189 189 189)] focus:bg-[#fafad2]
              placeholder:leading-[22.8px] placeholder:font-light placeholder:text-[rgb(189 189 189)]
            "
            type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
            value={password}
          />
          <div 
            onClick={() => setShowPassword(e => !e)}
            className="flex items-center justify-center h-full px-[12px] border-[#6c757d] border-[1px] hover:bg-[#6c757d] hover:fill-white fill-[#6c757d] cursor-pointer"
          >
            {
              showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
                  <path  d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                </svg>
              )
            }
          </div>
        </div>

        </div>
        
        
        {/* <div>
          <input 
            onClick={() => setShowPassword(!showPassword)}
            type="checkbox" 
            id="passwordView" 
          />
          <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
        </div> */}
      
    </>
  )
}
