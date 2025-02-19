import React from 'react'

const Servicesboxes = ({ title, bgUrl }) => {
  return (
    <div className='flex justify-center mb-16 text-black h-auto  align-bottom' >
      
      <div 
        className='w-80 h-[420px] mt-16 flex flex-col justify-center border-2 border-white rounded-2xl p-6  '
        style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >


<div className='w-full h-[220px]  flex flex-col align-bottom mt-auto'>

  <div className='mt-auto'>
<h1 className=' font-extrabold text-3xl text-left'>{title}</h1>

<div className='bg-white h-14 w-[100%]  rounded-xl border-2 border-red-500 flex justify-center items-center text-black text-lg align-bottom '>

   

   <h1  > Explore Now   </h1>


</div>
</div>
</div>

</div>

    </div>
  )
}

export default Servicesboxes
