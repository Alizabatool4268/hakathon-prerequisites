import React from 'react';
import Image from 'next/image';
import { RxPaperPlane } from "react-icons/rx";

function Footer() {
  return (
   <footer className='bg-black text-white'>
       <div className='grid grid-cols-5 grid-rows-1 gap-3'>

        <div className='flex items-start justify-center px-4 flex-col'>
            <h5>Exclusive</h5>
            <button>Subscribe</button>
            <p>Get 10% off your first order</p>
            <span className='flex items-center'>
             <input type="email" placeholder='Enter your email' className='bg-black border-b-[1px] border-t-[1px] border-l-[1px] h-[48px]' />
             <button>
             <RxPaperPlane className='h-[48px] border-b-[1px] border-t-[1px] border-r-[1px] w-[20px]' />
             </button>
           </span>
        </div>
        <div>
          <h5>Support</h5>
          <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div></div>
        <div></div>
        <div></div>

       </div>
       <div className='text-zinc-600 w-full flex justify-center items-center xsm:text-sm'>© Copyright Rimel 2022. All right reserved</div>
   </footer>
  )
}

export default Footer