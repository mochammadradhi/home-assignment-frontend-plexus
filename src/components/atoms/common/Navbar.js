import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
   <nav className='inline-flex relative overflow-hidden backdrop-blur-lg py-5 bg-white'>
    <img src='https://img.freepik.com/free-vector/house-shape-logo-template_1195-18.jpg?w=740&t=st=1662130827~exp=1662131427~hmac=46b649c0db5b5f8d4a703087240bfa07fe4f7e2a04fd2b0ad4f73da25a4c24f3' className='p-5 my-[6px] relative w-[80px] '/>
       <a href='#about' className='text-[#83818c] p-5 my-[6px] relative'>Portofolio</a>
       <a href='#about'className='text-[#83818c] p-5 my-[6px] relative'>Client</a>
       <a href='#about'className='text-[#83818c] p-5 my-[6px] relative'>About</a>
       <a href='#about'className='text-[#83818c] p-5 my-[6px] relative'>Our TEAM</a>
   </nav>
    </div>
  )
}

export default Navbar