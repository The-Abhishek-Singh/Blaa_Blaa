import React from 'react'
import { Globe,Handshake } from 'lucide-react';
import Input from './ui/Input';
import Servicesboxes from './ui/Servicesboxes';


const head = () => {

  return (
    <div>

    <div className='h-auto w-full  pt-28  servicegradient'>
  
  <div className='flex '>


   <div className='h-[500px] w-[50%] '>


   <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl m-10 ml-24'>OUR SERVICES</h1>



   <p className='text-white font-light text-lg md:text-2xl lg:text-xl w-full ml-24'>
        
      lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </p>



       <div className='mt-10'>

           <Input/>


           </div>


        <div className=' ml-24 mt-24 flex'>

        <Globe />
        <h1 className='ml-6 mr-10' >Globally Recognize </h1>

        <Handshake />

        <h1 className='ml-6'>No Commitment</h1>

        </div>


   </div>


   <div className='h-[500px] w-[50%]  '>


   <img src="/Removed.png" alt="" className='w-[60%] ml-[30%]' />


   



</div>





    </div>

    <div className='h-28 w-full mt-10 flex '>

    
    <h1 className='ml-24 mt-10'>Trusted By <br /> 600+ Companies  </h1>

<div className='flex ml-[20%] mt-10'> 

    <h1 className='mr-28'>Google</h1>

    <h1 className='mr-28'>Facebook</h1>

    <h1 className='mr-28'>Meta</h1>

    <h1 className='mr-28'>Amazone </h1>

    <h1 className='mr-28'>Tata</h1>

    <h1 className='mr-28'>Techno</h1>

    <h1>Accenture</h1>
    </div>


    </div>

    </div>

     


     {/* SECONE PART OF THE PAGE  */}




<div className='h-auto w-full  mt-28'>


<div className='flex justify-center' >
<div className='w-[80%] h-[80px] bg-red-600 flex  justify-center align-middle rounded-full rounded-tl-md rounded-br-sm bg-gradient-to-r from-[#D31C1F] to-[#AD0003] ' >

<h1 className='text-white mt-[25px] text-3xl' > Careertronic services</h1>

</div>


  
</div>




<div className='grid grid-cols-3 mt-20 flex justify-center' >


   
   <Servicesboxes 
     title="SOFTWARE DEVELOPMENT & EXPORT SERVICES"
     bgUrl="/image%2021.png"
   />

   <Servicesboxes 
     title="IT TRAINING & CERTIFICATION"
     bgUrl="/div2.png"
   />

   <Servicesboxes 
     title="CLOUD SOLUTIONS & MIGRATION"
     bgUrl="/div3.png"
   />

   <Servicesboxes 
     title="CYBERSECURITY SERVICES"
     bgUrl="/div4.png"
   />

   <Servicesboxes 
     title="Study Abroad"
     bgUrl="/div5.png"
   />

   <Servicesboxes 
     title="Work Abroad"
     bgUrl="/div6.png"
   />

   <Servicesboxes 
     title="E-COMMERCE SOLUTIONS"
     bgUrl="/div7.png"
   />

   <Servicesboxes 
     title="UI/UX DESIGN SERVICES"
     bgUrl="/div8.png"
   />

   <Servicesboxes 
     title="IT INFRASTRUCTURE MANAGEMENT"
     bgUrl="/div9.png"
   />








</div>


</div>


    
  </div>
  )
}

export default head
