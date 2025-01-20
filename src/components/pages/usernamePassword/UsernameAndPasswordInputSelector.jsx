
export const UsernameAndPasswordInputSelector = ({selectActive, setSelectActive, selectItem, setSelectItem, opciones}) => {
    return (
        <>
            <div className="relative">
                <div 
                    className="rounded shadow-sm dropbox flex justify-between items-center"
                    onClick={() => setSelectActive( !selectActive )}
                >
                    <div className="inputAvVilla">
                        <p className="text-[#414a53]">{selectItem}</p>
                    </div>
                    {/* <i className={selectActive === true ? 'triangulo-arriba' : 'triangulo-abajo'}></i> */}
                </div>

                <div 
                    className={selectActive === true ? 'absolute opciones shadow w-full' : 'absolute opciones shadow w-full hidden'} 
                    style={{ zIndex: '100' }}                    
                >					
                    {
                        opciones.map((e, i) => 
                            <p 
                                key={i}
                                onClick={() => {
                                    setSelectItem(e)
                                    setSelectActive(false)
                                }}
                                className="
                                    hover:bg-[#dbe2e8]
                                    text-[#414a53] py-5 px-4 select-none
                                    odd:bg-white odd:border-y-[#ACBAC9] odd:border-[1px]  
                                    even:bg-[#ffffff]" >
                                {e}
                            </p>
                        )
                    }
                    
                </div>
            </div>
        </>
    )
}
