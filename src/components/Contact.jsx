import React from 'react'

const Contact = () => {
  return (
    <div name='contacts' className='w-full h-screen bg-gradient-to-b from-[#E1E1E1] to-[#ADADAD] dark:bg-gradient-to-b dark:from-[#1B1B1B] dark:to-[#100F0F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bgddvvna"  className='flex flex-col max-w-[600px] w-full' target = '_blank'>
          <div className='pb-5'>
            <p className='text-3xl font-bold text-[#D8843B] text-center mx-auto mt-6 '>Contact Me</p>
            <p className='text-center font-regular text-[#1B1B1B] dark:text-white mx-auto py-4'>Feel free to reach out if you have any questions and/or willing to collaborate</p>
          </div>
          <input className='text-white bg-[#979797] p-2 placeholder-[#C8C8C8]' type="text" placeholder='Name' name="name" />
          <input className='text-white my-4 p-2 bg-[#979797] p-2 placeholder-[#C8C8C8]' type="email" placeholder='Email' name="email" />
          <textarea className='text-white bg-[#979797] p-2 placeholder-[#C8C8C8]' name="message" placeholder='Message' rows="6"></textarea>
          <button className='bg-[#D8843B] text-white font-semibold w-[180px] rounded-md my-6 mx-auto py-3 shadow-xl hover:shadow-lg hover:bg-black hover:text-[#D8843B] ease-in-out duration-500' >Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact