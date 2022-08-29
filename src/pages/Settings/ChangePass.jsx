import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ChangePass = ({ setChangePassword }) => {
	return (
		<div className='relative p-4 mx-auto bg-white rounded-md shadow-md w-96 animate-fade-in-down'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-bold text-neutral-600'>
					Change Password
				</h2>
				<IoIosCloseCircleOutline
					onClick={() => setChangePassword(false)}
					className='w-6 h-6 cursor-pointer hover:text-blue-600'
				/>
			</div>
			<form action=''>
				<div className='py-4 my-5 border rounded-md border-neutral-200'>
					<div className='px-4 mb-4'>
						<label
							htmlFor='currentpass'
							className='text-sm capitalize text-neutral-800'
						>
							current password
						</label>
						<input
							type='password'
							name='currentpass'
							placeholder='currentpass'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
					<div className='px-4 mb-4'>
						<label
							htmlFor='newpass'
							className='text-sm capitalize text-neutral-800'
						>
							new password
						</label>
						<input
							type='password'
							name='newpass'
							placeholder='newpass'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
					<div className='px-4 mb-4'>
						<label
							htmlFor='confirmpass'
							className='text-sm capitalize text-neutral-800'
						>
							confirm password
						</label>
						<input
							type='password'
							name='confirmpass'
							placeholder='confirmpass'
							className='w-full px-3 py-2 mt-1 text-sm capitalize border rounded placeholder:text-neutral-400 text-neutral-600 focus:border-neutral-400 focus:outline-none'
						/>
					</div>
				</div>
				<button
					onClick={() => setChangePassword(false)}
					className='px-4 text-center w-full bg-blue-600 text-white font-light rounded-md py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
				>
					Change Password
				</button>
			</form>
		</div>
	);
};

export default ChangePass;
