import React, { useState } from "react";
import ChangePass from "./ChangePass";
import ChangeProfile from "./ChangeProfile";
import ChangeStoreDetails from "./ChangeStoreDetails";
import Navigation from "./Navigation";

const Settings = () => {
	const [changePassword, setChangePassword] = useState(false);
	const [personalDetails, setPersonalDetails] = useState(false);
	const [storeDetails, setStoreDetails] = useState(false);

	return (
		<div>
			<Navigation
				setChangePassword={setChangePassword}
				setPersonalDetails={setPersonalDetails}
				setStoreDetails={setStoreDetails}
			/>

			{changePassword ? (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setChangePassword(false)}
					></div>
					<div className='flex items-center min-h-screen'>
						<ChangePass setChangePassword={setChangePassword} />
					</div>
				</div>
			) : null}

			{personalDetails ? (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setPersonalDetails(false)}
					></div>
					<div className='flex items-center min-h-screen'>
						<ChangeProfile
							setPersonalDetails={setPersonalDetails}
						/>
					</div>
				</div>
			) : null}

			{storeDetails ? (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setStoreDetails(false)}
					></div>
					<div className='flex items-center min-h-screen'>
						<ChangeStoreDetails setStoreDetails={setStoreDetails} />
					</div>
				</div>
			) : null}

			<div className='p-5 my-5 bg-white border rounded-md dark:bg-gray-800 '>
				<div className='flex items-center mb-4 text-sm gap-x-5'>
					<p className='text-neutral-800'>Name:</p>
					<p className='text-neutral-600'>Benson Kimathi</p>
				</div>
				<div className='flex items-center mb-4 text-sm gap-x-5'>
					<p className='text-neutral-800'>Email:</p>
					<p className='text-neutral-600'>
						bensonkimathi93@gmail.com
					</p>
				</div>
				<div className='flex items-center mb-4 text-sm gap-x-5'>
					<p className='text-neutral-800'>Phone:</p>
					<p className='text-neutral-600'>0702566209</p>
				</div>
				<div className='flex items-center mb-4 text-sm gap-x-5'>
					<p className='text-neutral-800'>Address:</p>
					<p className='text-neutral-600'>34 56T Road Kangemi</p>
				</div>
				<div className='flex items-center text-sm gap-x-5'>
					<p className='text-neutral-800'>Location:</p>
					<p className='text-neutral-600'>Nyeri, Kenya</p>
				</div>
			</div>
		</div>
	);
};

export default Settings;
