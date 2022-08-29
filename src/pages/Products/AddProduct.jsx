import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Select from "react-tailwindcss-select";

const CatOptions = [
	{ value: "bathroom Furniture", label: "bathroom Furniture" },
	{ value: "kids Furniture", label: "kids Furniture" },
	{ value: "kitchen Furniture", label: "kitchen Furniture" },
	{ value: "office Furniture", label: "office Furniture" },
	{ value: "outdoor Furniture", label: "outdoor Furniture" },
	{ value: "sofas and chairs", label: "sofas and chairs" },
	{ value: "storage Units", label: "storage Units" },
];

const brandOptions = [
	{ value: "adico", label: "adico" },
	{ value: "adora", label: "adora" },
	{ value: "art nova", label: "art nova" },
	{ value: "askia", label: "askia" },
	{ value: "barksdale", label: "barksdale" },
	{ value: "colibri", label: "colibri" },
	{ value: "ecoco", label: "ecoco" },
	{ value: "homgeek", label: "homgeek" },
	{ value: "hommy", label: "hommy" },
	{ value: "intex", label: "intex" },
];

const AddProduct = ({ setAddModal }) => {
	const [category, setCategory] = useState(null);
	const [brand, setBrand] = useState(null);

	const handleCatChange = (value) => {
		console.log("value", value);
		setCategory(value);
	};
	const handleBrandChange = (value) => {
		console.log("value", value);
		setBrand(value);
	};

	return (
		<div className='relative w-3/4 p-4 mx-auto rounded-md shadow-md bg-white animate-fade-in-down'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-bold text-neutral-600'>
					Add Product
				</h2>
				<IoIosCloseCircleOutline
					onClick={() => setAddModal(false)}
					className='h-6 w-6 hover:text-blue-600 cursor-pointer'
				/>
			</div>
			<div className='flex justify-between gap-x-12'>
				<form className=''>
					<div className='my-5 py-4 border border-neutral-200 rounded-md'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='currentpass'
								className='text-neutral-800 text-sm capitalize'
							>
								current password
							</label>
							<input
								type='password'
								name='currentpass'
								placeholder='currentpass'
								className='capitalize border w-full mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
							/>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='newpass'
								className='text-neutral-800 text-sm capitalize'
							>
								new password
							</label>
							<input
								type='password'
								name='newpass'
								placeholder='newpass'
								className='capitalize border w-full mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
							/>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='confirmpass'
								className='text-neutral-800 text-sm capitalize'
							>
								confirm password
							</label>
							<input
								type='password'
								name='confirmpass'
								placeholder='confirmpass'
								className='capitalize border w-full mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
							/>
						</div>
					</div>
					<button className='px-4 w-1/3  bg-blue-600 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'>
						Save
					</button>
				</form>
				<form className=''>
					<div className='my-5 py-4 border border-neutral-200 rounded-md'>
						<div className='px-4 mb-4'>
							<label
								htmlFor='productname'
								className='text-neutral-800 text-sm capitalize'
							>
								Product name
							</label>
							<input
								type='text'
								name='productname'
								placeholder='Navy Blue 2-seater moss sofa'
								className='capitalize border w-full mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
							/>
						</div>

						<div className='px-4 mb-4'>
							<label
								htmlFor='category'
								className='text-neutral-800 text-sm capitalize'
							>
								category
							</label>

							<Select
								value={category}
								onChange={handleCatChange}
								options={CatOptions}
								placeholder='Select Category'
								isMultiple={true}
							/>
						</div>

						<div className='px-4 mb-4'>
							<label
								htmlFor='brand'
								className='text-neutral-800 text-sm capitalize'
							>
								brand
							</label>
							<Select
								value={brand}
								onChange={handleBrandChange}
								options={brandOptions}
								placeholder='Select Brand'
							/>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div className='px-4 mb-4'>
								<label
									htmlFor='price'
									className='text-neutral-800 text-sm capitalize'
								>
									Price
								</label>
								<article className='flex items-center border border-neutral-200 w-full mt-1 rounded'>
									<p className='bg-neutral-200 rounded-l h-full py-2 w-1/5 text-center text-neutral-700'>
										Ksh
									</p>
									<input
										type='number'
										name='price'
										placeholder='325'
										className='capitalize w-4/5 px-3  placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
									/>
								</article>
							</div>

							<div className='px-4 mb-4'>
								<label
									htmlFor='discount'
									className='text-neutral-800 text-sm capitalize'
								>
									discount
								</label>
								<input
									type='number'
									name='discount'
									placeholder='10.5'
									className='capitalize border w-full mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
								/>
							</div>
						</div>
						<div className='px-4 mb-4'>
							<label
								htmlFor='description'
								className='text-neutral-800 text-sm capitalize'
							>
								description
							</label>
							<textarea
								name='description'
								id=''
								className='border w-full h-24 mt-1 py-2 px-3 rounded placeholder:text-neutral-400 text-neutral-600 text-sm focus:border-neutral-400 focus:outline-none'
								placeholder='Brera is a collection of semi-directional and directional furniture with panel sides.'
							/>
						</div>
					</div>
					<button
						onClick={() => setAddModal(false)}
						className='px-4 w-1/3 bg-blue-600 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
