import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ChangeProfile = ({ setPersonalDetails }) => {
	return (
		<div className='relative w-1/2 p-4 mx-auto bg-white rounded-md shadow-md animate-fade-in-down'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-bold text-neutral-600'>
					Edit Personal Profile
				</h2>
				<IoIosCloseCircleOutline
					onClick={() => setPersonalDetails(false)}
					className='w-6 h-6 cursor-pointer hover:text-blue-600'
				/>
			</div>
			<form action=''>
				<div className='py-4 my-5 border rounded-md border-neutral-200'>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='username'
								className='text-sm capitalize text-neutral-800'
							>
								Your name
							</label>
							<input
								type='text'
								name='username'
								placeholder='Benson Kimathi'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='email'
								className='text-sm capitalize text-neutral-800'
							>
								email
							</label>
							<input
								type='email'
								name='email'
								placeholder='bensonkimathi93@gmail.com'
								className='w-full px-3 py-2 mt-1 text-sm border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='phone'
								className='text-sm capitalize text-neutral-800'
							>
								phone
							</label>
							<input
								type='tel'
								name='phone'
								placeholder='0702566209'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='address'
								className='text-sm capitalize text-neutral-800'
							>
								address
							</label>
							<input
								type='text'
								name='address'
								placeholder='813 Kangemi Rd, Nyeri, 60200, Kenya'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='location'
								className='text-sm capitalize text-neutral-800'
							>
								Location
							</label>
							<input
								type='password'
								name='location'
								placeholder='Kenya'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='avatar'
								className='text-sm capitalize text-neutral-800'
							>
								Profile Image
							</label>
							<input
								type='file'
								name='avatar'
								id='avatar'
								accept='image/png, image/jpeg image/jpg image/gif'
								className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
							/>
						</div>
					</div>
				</div>
				<button
					onClick={() => setPersonalDetails(false)}
					className='px-4 text-center w-full bg-blue-600 text-white font-light rounded-md py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
				>
					Save Changes
				</button>
			</form>
		</div>
	);
};

export default ChangeProfile;
