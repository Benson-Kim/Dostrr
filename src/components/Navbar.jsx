import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
	return (
		<nav className='m-5 dark:bg-gray-800'>
			<div className='container flex items-center justify-between mx-auto'>
				<span className='flex items-center w-1/3 h-10 bg-white border rounded-md '>
					<BsSearch className='ml-3' />
					<input
						type='text'
						placeholder='Search for...'
						className='w-full px-2 py-1 mx-2 rounded-md text-neutral-600 placeholder:text-neutral-400 focus:outline-none focus:shadow-sm '
					/>
				</span>

				<div className='flex justify-end gap-x-5 '>
					<div className='relative p-2 transition duration-300 ease-in-out bg-white border rounded-md cursor-pointer text-neutral-600 hover:text-blue-600'>
						<IoMdNotificationsOutline className='h-full w-7 ' />
						<span className='absolute animate-ping bg-red-600 h-2 w-2 rounded-full top-1/3 right-1/3 translate-x-0.5'></span>
					</div>
					<div className='relative flex items-center p-2 transition duration-300 ease-in-out bg-white border rounded-md cursor-pointer gap-x-1 text-neutral-600 hover:text-blue-600'>
						<img
							src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
							alt=''
							className='object-cover h-full rounded-sm w-7 opacity-90'
						/>
						<p className='text-sm text-neutral-500'>
							Benson Kimathi
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
