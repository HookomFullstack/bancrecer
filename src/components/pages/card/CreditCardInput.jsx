import React, { useState } from 'react'

export const CreditCardInput = ({card, month, year, cvv, handleChange, handleBlur, errors, touched}) => {
  
    const [cardLabel, setCardLabel] = useState(false);
    const [monthLabel, setMonthLabel] = useState(false);
    const [yearLabel, setYearLabel] = useState(false);
    const [cvvLabel, setCvvLabel] = useState(false);
    return (
        <>

        <div className='relative'>
        <input
            required
            className={
                touched.card && errors.card
                ? 'inputAvVilla border-2 border-b-[#a00104]'
                : 'inputAvVilla border-2 focus:border-b-[#0048db]'
              } 
            onChange={handleChange}
            name='card' 
            id={'cardLabel'}
            onClick={() => setCardLabel(true)}
            inputMode='numeric'
            type="number" 
            value={card}
            onBlur={handleBlur}
        />
        
                <label 
          htmlFor="cardLabel"
          onClick={() => setCardLabel(true)}
          className={
            cardLabel === false
            ? 'duration-200 text-[#2c2c33] absolute left-3 top-4'
            : 'duration-200 translate-y-[-12px] scale-75 text-[#2c2c33] absolute left-[-19px] top-4'
          }>
          digita tu tarjeta de debito o credito
        </label>
      
        {
          touched.card && errors.card && (
            <p className='text-[#2c2c33] text-xs mt-1'>{errors.card}</p>
          )
        } 
     
      </div>

        <div className='flex gap-2'>
            <div className='relative w-full'>
                <select 
                    required 
                    name="month" 
                    value={month}
                    id='monthLabel'
                    className={
                        touched.month && errors.month
                        ? 'inputAvVilla border-2 border-b-[#a00104]'
                        : 'inputAvVilla border-2 focus:border-b-[#0048db]'
                    } 
                    onChange={handleChange}
                    onClick={() => setMonthLabel(true)}

                >
                    {
                        [...Array(13)].map( (_, i) => {
                            if (i == 0) {
                                return (
                                    <option value='mes' key={i} className='font-normal '></option>
                                )
                            }
                            return (
                                <option value={i} key={i} className='font-normal '>{i < 10 ? `0${i}` : i }</option>
                            )
                        })
                    }
                </select>

                <label 
                htmlFor="monthLabel"
                onClick={() => setMonthLabel(true)}
                className={
                    monthLabel === false
                    ? 'duration-200 text-[#2c2c33] absolute left-3 top-4'
                    : 'duration-200 translate-y-[-12px] scale-75 text-[#2c2c33] absolute left-[13px] top-4'
                }>
                mes
                </label>
            
                {
                touched.month && errors.month && (
                    <p className='text-[#2c2c33] text-xs mt-1'>{errors.month}</p>
                    )
                } 
            </div> 

            <div className='relative w-full'>
                <select 
                    required 
                    name="year"
                    value={year}
                    id='yearLabel'
                    onClick={() => setYearLabel(true)}
                    className={
                        touched.year && errors.year
                        ? 'inputAvVilla border-2 border-b-[#a00104]'
                        : 'inputAvVilla border-2 focus:border-b-[#0048db]'
                    } 
                    onChange={handleChange}    
                >
                    {
                        [...Array(15)].map( (_, i) => {

                            if (i == 0) {
                                return (
                                    <option value={'año'} key={i} className='font-normal'></option>
                                )
                            }
                            
                            return (
                                <option value={2023 + i} key={i++} className='font-normal' >{ 2023 + i }</option>
                            )
                        })
                    }
                </select>

                <label 
                    htmlFor="yearLabel"
                    onClick={() => setYearLabel(true)}
                    className={
                        yearLabel === false
                        ? 'duration-200 text-[#2c2c33] absolute left-3 top-4'
                        : 'duration-200 translate-y-[-12px] scale-75 text-[#2c2c33] absolute left-[13px] top-4'
                    }>
                    año
                </label>
            
                {
                touched.year && errors.year && (
                    <p className='text-[#2c2c33] text-xs mt-1'>{errors.year}</p>
                    )
                } 
            </div>

        </div>
        
        <div className='relative w-full'>

            <input
                required
                className={
                    touched.cvv && errors.cvv
                    ? 'inputAvVilla border-2 border-b-[#a00104]'
                    : 'inputAvVilla border-2 focus:border-b-[#0048db]'
                } 
                onChange={handleChange}
                name='cvv' 
                type="password"
                inputMode='numeric'
                onClick={() => setCvvLabel(true)}
                value={cvv.slice(0, 3).replace(/[^0-9]*$/, '')}
                onBlur={handleBlur}
            />
            <label 
                htmlFor="yearLabel"
                onClick={() => setCvvLabel(true)}
                className={
                    cvvLabel === false
                    ? 'duration-200 text-[#2c2c33] absolute left-3 top-4'
                    : 'duration-200 translate-y-[-12px] scale-75 text-[#2c2c33] absolute left-[10px] top-4'
                }>
                cvv
            </label>
        
            {
            touched.cvv && errors.cvv && (
                <p className='text-[#2c2c33] text-xs mt-1'>{errors.cvv}</p>
                )
            } 
        </div>

    </>
  )
}
