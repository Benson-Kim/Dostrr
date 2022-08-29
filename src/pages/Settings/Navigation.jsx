import React from "react";
import { FiEdit } from "react-icons/fi";

const Navigation = ({
	setChangePassword,
	setPersonalDetails,
	setStoreDetails,
}) => {
	return (
		<nav className='p-5 bg-white border rounded-md dark:bg-gray-800 '>
			<div className='container flex items-center justify-between px-4 mx-auto'>
				<button
					onClick={() => setChangePassword(true)}
					className='flex items-center justify-center px-5 py-3 font-light text-white transition duration-300 ease-in bg-blue-500 rounded gap-x-2 hover:bg-blue-700 hover:animate-pulse'
				>
					<FiEdit /> Change Password
				</button>
				<button
					onClick={() => setPersonalDetails(true)}
					className='flex items-center justify-center px-5 py-3 font-light text-white transition duration-300 ease-in bg-blue-500 rounded gap-x-2 hover:bg-blue-700 hover:animate-pulse'
				>
					<FiEdit /> Change Personal Details
				</button>
				<button
					onClick={() => setStoreDetails(true)}
					className='flex items-center justify-center px-5 py-3 font-light text-white transition duration-300 ease-in bg-blue-500 rounded gap-x-2 hover:bg-blue-700 hover:animate-pulse'
				>
					<FiEdit /> Change Store Details
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
