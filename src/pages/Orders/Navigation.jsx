import React from "react";
import { useState } from "react";
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

const Navigation = () => {
	const [customer, setCustomer] = useState(null);
	const [status, setStatus] = useState(null);
	const [price, setPrice] = useState(null);
	const [date, setDate] = useState(null);

	const handleCatChange = (value) => {
		console.log("value", value);
		setCustomer(value);
	};
	const handleStatusChange = (value) => {
		console.log("value", value);
		setStatus(value);
	};
	return (
		<nav className='px-2 py-1 bg-white border rounded-md dark:bg-gray-800 '>
			<div className='container flex items-center justify-between px-4 mx-auto'>
				<span className='flex items-center w-2/3 gap-x-3'>
					<Select
						value={customer}
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
			</div>
		</nav>
	);
};

export default Navigation;
