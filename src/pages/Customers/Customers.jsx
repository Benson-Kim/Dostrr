import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import Navigation from "./Navigation";

const Customers = () => {
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
						<AddCustomer setAddModal={setAddModal} />
					</div>
				</div>
			) : null}
			<div className='p-5 my-5 bg-white border rounded-md shadow-inner dark:bg-gray-800'>
				<h2 className='text-lg font-semibold text-gray-700 dark:text-gray-100'>
					Customers
				</h2>
				<table class='table-auto w-full my-5'>
					<thead>
						<tr className='py-2 text-sm text-left text-white capitalize bg-blue-500 shadow dark:bg-gray-700'>
							<th className='p-2 font-light'>customer name</th>
							<th className='p-2 font-light'>#ID</th>
							<th className='p-2 font-light'>email</th>
							<th className='p-2 font-light'>phone</th>
							<th className='p-2 font-light'>last ordered</th>
							<th className='p-2 font-light'>spent</th>
							<th className='p-2 font-light'>status</th>
							<th className='p-2 font-light text-center'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className='overflow-auto'>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center p-1 text-sm'>
								<img
									src='https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
									alt=''
									className='object-cover mr-2 rounded-full h-14 w-14'
								/>
								<p>Jane Cooper</p>
							</td>
							<td className='p-2 text-sm '>217801</td>
							<td className='p-2 text-sm '>
								janecooper@hotmail.com
							</td>
							<td className='p-2 text-sm '>254702566209</td>
							<td className='p-2 text-sm '>03/07/2021</td>
							<td className='p-2 text-sm '>$1240</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-blue-50 text-blue-700 font-light rounded-lg py-1.5 '>
									Active
								</span>
							</td>
							<td className='py-2 text-right'>
								<Link
									to='/'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center p-1 text-sm'>
								<img
									src='https://images.unsplash.com/photo-1598096969068-7f52cac10c83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYm95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
									alt=''
									className='object-cover mr-2 rounded-full h-14 w-14'
								/>
								<p>James Smith</p>
							</td>
							<td className='p-2 text-sm '>217804</td>
							<td className='p-2 text-sm '>
								smithjames@gmail.com
							</td>
							<td className='p-2 text-sm '>254705537940</td>
							<td className='p-2 text-sm '>23/09/2020</td>
							<td className='p-2 text-sm '>$800</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
									Inactive
								</span>
							</td>
							<td className='py-2 text-right'>
								<Link
									to='/'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center p-1 text-sm'>
								<img
									src='https://images.unsplash.com/photo-1633592693410-48dde7309702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2VueWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
									alt=''
									className='object-cover mr-2 rounded-full h-14 w-14'
								/>
								<p>Bell Whiteney</p>
							</td>
							<td className='p-2 text-sm '>217571</td>
							<td className='p-2 text-sm '>
								bell.whites@ameritech.com
							</td>
							<td className='p-2 text-sm '>254702856502</td>
							<td className='p-2 text-sm '>04/28/2020</td>
							<td className='p-2 text-sm '>$560</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
									Inactive
								</span>
							</td>
							<td className='py-2 text-right'>
								<Link
									to='/'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/'
									className='px-3 bg-rose-600 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='flex items-center p-1 text-sm'>
								<img
									src='https://images.unsplash.com/photo-1520943219761-6ca840e2e585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VueWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
									alt=''
									className='object-cover mr-2 rounded-full h-14 w-14'
								/>
								<p>Anne Wilson</p>
							</td>
							<td className='p-2 text-sm '>261818</td>
							<td className='p-2 text-sm '>
								annewillys@comail.com
							</td>
							<td className='p-2 text-sm '>254711178559</td>
							<td className='p-2 text-sm '>23/08/2022</td>
							<td className='p-2 text-sm '>$2300</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-blue-50 text-blue-700 font-light rounded-lg py-1.5 '>
									Active
								</span>
							</td>
							<td className='py-2 text-right'>
								<Link
									to='/'
									className='px-3 mr-2 bg-blue-500 text-white font-light rounded py-1.5 hover:bg-blue-700 transition duration-300 ease-in'
								>
									Edit
								</Link>
								<Link
									to='/'
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

export default Customers;
