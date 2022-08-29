import React from "react";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import Select from "react-tailwindcss-select";

const CatOptions = [
	{ value: "table", label: "Tables" },
	{ value: "sofas", label: "Sofas" },
	{ value: "storage", label: "Storage Units" },
];
const StatusOptions = [
	{ value: true, label: "In Stock" },
	{ value: false, label: "Out of Stock" },
];
const PriceOptions = [];
const DateOptions = [];

const Navigation = ({ setAddModal }) => {
	const [category, setCategory] = useState(null);
	const [status, setStatus] = useState(null);
	const [price, setPrice] = useState(null);
	const [date, setDate] = useState(null);

	const handleCatChange = (value) => {
		console.log("value", value);
		setCategory(value);
	};
	const handleStatusChange = (value) => {
		console.log("value", value);
		setStatus(value);
	};
	return (
		<nav className='px-2 py-1 border bg-white dark:bg-gray-800 rounded-md '>
			<div className='container flex justify-between items-center mx-auto px-4'>
				<span className='w-2/3 flex items-center gap-x-3'>
					<Select
						value={category}
						onChange={handleCatChange}
						options={CatOptions}
						placeholder='Category'
					/>

					<Select
						value={status}
						onChange={handleStatusChange}
						options={StatusOptions}
						placeholder='Status'
					/>

					<Select
						value={price}
						onChange={handleCatChange}
						options={PriceOptions}
						placeholder='Price'
					/>

					<Select
						value={date}
						onChange={handleCatChange}
						options={DateOptions}
						placeholder='Date'
					/>
				</span>

				<div className='flex justify-end'>
					<button
						onClick={() => setAddModal(true)}
						className='flex items-center justify-center gap-x-2 px-3 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 hover:animate-pulse transition duration-300 ease-in'
					>
						<BsPlusCircle /> Add Product
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
