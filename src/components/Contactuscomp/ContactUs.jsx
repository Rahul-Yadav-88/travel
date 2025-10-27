import React from 'react'
import contactImage from '../../../public/Images/contactus.png'
import contactImageMobile from '../../../public/Images/contactusMobile.png'
import { LocateFixed } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className='w-full  flex flex-col justify-center'>
            <div className="banner-image bg-orange-50  h-64 max-w-8xl flex justify-center">
                <img className='w-full md:block hidden  object-contain ' src={contactImage} alt="" />
                <img className='w-full md:hidden object-contain ' src={contactImageMobile} alt="" />
            </div>
            <div className="contact-form mt-10 flex flex-col md:flex-row md:gap-30 gap-10 justify-center">
                <div className="message md:p-0 p-5 font-semibold flex flex-col md:w-1/4 gap-4"><h1 className='text-3xl'>Let's talk with us</h1>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti cum earum doloribus itaque.</p>
                    <ul className="address flex gap-3 flex-col">
                        <li className='flex gap-2'><LocateFixed /> <span>Aeren Building, Plot No. 14, IT Park Rd, Chandigarh 160101</span></li>
                        <li className='flex gap-2'><Phone /> <span>+1 13987227</span></li>
                        <li className='flex gap-2'><Mail /> <span>contact@viatours.com</span></li>
                    </ul></div>

                <div className="p-7 mb-10 shadow-lg rounded-lg form md:w-1/3">
                    <form className='flex flex-col gap-4' action="">
                        <div className='flex gap-2'>
                            <input  placeholder='Name' className='bg-stone-100   border-none rounded-md focus:outline-orange-500  hover:outline-1g hover:outline-b-orange-500 border-1 border-black w-1/2 py-2 px-2' type="text" id='name' name='name' />
                            <input  placeholder='Last Name' className='bg-stone-100   border-none rounded-md focus:outline-orange-500  hover:outline-1g hover:outline-b-orange-500 border-1 border-black w-1/2 py-2 px-2' type="text" id='Last name' />
                        </div>

                        <input placeholder='Email' className='bg-stone-100   border-none rounded-md focus:outline-orange-500  hover:outline-1g hover:outline-b-orange-500 px-2 py-2 border-1 border-black' type="email" id='Email' />
                        <input placeholder='Phone' className='bg-stone-100   border-none rounded-md focus:outline-orange-500  hover:outline-1g hover:outline-b-orange-500 px-2 py-2 border-1 border-black' type="phone" id='Phone' />
                        <textarea placeholder='Your Message' className='bg-stone-100   border-none rounded-md focus:outline-orange-500   hover:border-b-orange-500 px-2 py-1 border-1 border-black' name="" id=""></textarea>
                        <button type="submit" className='hover:bg-orange-600 bg-orange-500 mt-5 p-2 rounded-xl text-white'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs