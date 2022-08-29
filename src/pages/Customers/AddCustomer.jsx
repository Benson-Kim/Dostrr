import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddCustomer = ({ setAddModal }) => {
	return (
		<div className='relative p-4 mx-auto bg-white rounded-md shadow-md w-96 animate-fade-in-down'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-bold text-neutral-600'>
					Add Customer
				</h2>
				<IoIosCloseCircleOutline
					onClick={() => setAddModal(false)}
					className='w-6 h-6 cursor-pointer hover:text-blue-600'
				/>
			</div>
			<form action=''>
				<div className='py-4 my-5 border rounded-md border-neutral-200'>
					<div className='px-4 mb-4'>
						<label
							htmlFor='firstname'
							className='text-sm capitalize text-neutral-800'
						>
							First Name
						</label>
						<input
							type='text'
							name='firstname'
							placeholder='Firstname'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
					<div className='px-4 mb-4'>
						<label
							htmlFor='lastname'
							className='text-sm capitalize text-neutral-800'
						>
							Last Name
						</label>
						<input
							type='text'
							name='lastname'
							placeholder='Lastname'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
					<div className='px-4 mb-4'>
						<label
							htmlFor='email'
							className='text-sm capitalize text-neutral-800'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							placeholder='emailaddress@gmail.com'
							className='w-full px-3 py-2 mt-1 text-sm border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
					<div className='px-4 mb-4'>
						<label
							htmlFor='phonenumber'
							className='text-sm capitalize text-neutral-800'
						>
							Phone Number
						</label>
						<input
							type='tel'
							name='phonenumber'
							placeholder='07xxxxxxxx'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
				</div>
				<button
					onClick={() => setAddModal(false)}
					className='px-4 text-center w-full bg-blue-600 text-white font-light rounded-md py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
				>
					Add Customer
				</button>
			</form>
		</div>
	);
};

export default AddCustomer;
