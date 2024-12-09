import React from 'react';
import Link from 'next/link';

function Offer() {
  return (
   <section className='w-screen bg-black overflow-x-hidden grid grid-cols-5 grid-rows-1
     text-[#FAFAFA] text-sm gap-2 xsm:h-[42px] xsm:text-start xsm:text-[14px]'>
     <div className='col-start-1 col-end-5 text-center sm:mt-2'>
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href={"/"} className='underline decoration-white'>ShopNow</Link>
    </div>
     <div className='col-start-5 xsm:mt-2 sm:mt-2'>
        <select name="language" id="lag" className='text-white bg-black'>
            <option value="English">English</option>
            <option value="English">Urdu</option>
            <option value="English">Chinese</option>
            <option value="English">Arabic</option>
        </select>
     </div>
   </section>
  )
}

export default Offer;