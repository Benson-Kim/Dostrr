import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Navigation from "./Navigation";

const Products = () => {
	const [addModal, setAddModal] = useState(false);

	return (
		<>
			<Navigation setAddModal={setAddModal} />
			{addModal ? (
				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-40'
						onClick={() => setAddModal(false)}
					></div>
					<div className='flex items-center min-h-screen'>
						<AddProduct setAddModal={setAddModal} />
					</div>
				</div>
			) : null}
			<div className='p-5 my-5 bg-white border rounded-md shadow-inner dark:bg-gray-800'>
				<h2 className='text-lg font-semibold text-gray-700 dark:text-gray-100'>
					Products
				</h2>
				<table class='table-auto w-full my-5'>
					<thead>
						<tr className='py-2 text-sm text-left text-white capitalize bg-blue-500 shadow dark:bg-gray-700'>
							<th className='p-2 font-light'>product name</th>
							<th className='p-2 font-light'>category</th>
							<th className='p-2 font-light'>price</th>
							<th className='p-2 font-light'>stock</th>
							<th className='p-2 font-light'>sold</th>
							<th className='p-2 font-light'>Revenue</th>
							<th className='p-2 font-light text-center'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className='overflow-auto'>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center py-2 text-sm'>
								<img
									src='https://img.edilportale.com/product-thumbs/h_44444-Flexform-599716-rel1de8d101.jpg'
									alt=''
									className='object-contain h-10 w-14'
								/>
								<p>
									The Sliding Mr. Bones (Next Stop,
									Pottersville)
								</p>
							</td>
							<td className='px-3 py-2 text-sm '>
								Sofas, Flexform
							</td>
							<td className='px-3 py-2 text-sm '>$350</td>
							<td className='px-3 py-2 text-sm '>30</td>
							<td className='px-3 py-2 text-sm '>7</td>
							<td className='px-3 py-2 text-sm '>$1240</td>
							<td className='py-2 text-right'>
								<Link
									to='/addproduct'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/addproduct'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Products;
