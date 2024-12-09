import React from 'react';
import Image from 'next/image';
import { CgArrowsScrollV } from "react-icons/cg";

function Cart() {
  return (
    <section className='w-screen overflow-x-hidden'>
      <div className='w-full h-[70px] flex justify-start items-center ml-4 gap-1 xsm:text-sm'>
        <p className='text-[#b0b0b0]'>Home /</p>
        <p>Cart</p>
      </div>
      <div className='grid grid-rows-4 gap-3'>
        <div className='h-[72px]'>
           <ul className='flex justify-around items-center xsm:text-sm'>
             <li>Product</li>
             <li>Price</li>
             <li>Quantity</li>
             <li>Subtotal</li>
           </ul>
        </div>
        <div className='h-[72px] flex justify-around items-center '>
          <Image
          height={54}
          width={54}
          alt='laptop'
          src={"/Images/laptop-red-display.png"}>
          </Image>
          <p>$650</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] border-solid border-black rounded-sm gap-2'>
            <p>01</p>
            <CgArrowsScrollV />
          </span>
          <p>$650</p>
        </div>
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={54}
          width={54}
          alt='controller'
          src={"/Images/red-controller.png"}>
          </Image>
          <p>$550</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>02</p>
            <CgArrowsScrollV />
          </span>
          <p>$1100</p>
        </div>       
        <div className='flex justify-around items-center '>
          <button className='h-[56px] w-[206px] border-[1px] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Return To Shop</button>
          <button className='h-[56px] w-[195px] border-[1px] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Update Cart</button>
        </div>
      </div>

      {/* shipping */}
      <div className='flex justify-around items-start mt-8 msm:flex-col xsm:flex-col ssm:flex-col
       ssm:justify-center msm:justify-center xsm:gap-4 xsm:items-center ssm:items-center ssm:gap-4 msm:gap-4
       msm:items-center sm:flex-col sm:justify-center sm:items-center'>

        <div className='flex gap-2 msm:h-[200px] ssm:flex-col xsm:flex-col xsm:justify-center 
           xsm:items-center ssm:items-center msm:flex-col msm:justify-center msm:items-center 
           sm:flex-col sm:justify-center sm:items-center'>

          <input type="text" placeholder='Coupon Code' className='h-[56px] w-[300px] border-[1px] 
          border-solid ml-2 border-black rounded-sm md:[240px] xsm:h-[40px] xsm:w-[270px] xsm:m-0 '/>
          <button className='h-[56px] w-[211px] bg-[#DB4444] rounded-sm text-white md:w-[151px] 
          sm:text-sm xsm:ml-3 xsm:h-[40px]'>Apply Coupon</button>
        
        </div>


        <div className='flex justify-around items-center flex-col h-[324px]
         w-[470px] border-[1px] border-solid ml-2 border-black rounded-sm msm:h-[400px]
         xsm:w-[280px] xsm:m-0 ssm:m-0 ssm:w-[300px] msm:m-0 msm:w-[400px] md:w-[470px]'>

          <h5 className='w-[422px] text-start sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>Cart Total</h5>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px] '>
            <p>Subtotal:</p>
            <p>$1750</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Shipping:</p>
            <p>Free</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Total:</p>
            <p>$1750</p>
          </span>
          <button className='h-[56px] w-[211px] sm:w[211px] bg-[#DB4444] rounded-sm text-white 
          sm:text-sm xsm:w-[140px]'>Procees to checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Cart;