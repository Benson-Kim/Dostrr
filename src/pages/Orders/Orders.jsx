import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Orders = () => {
	return (
		<>
			<Navigation />
			<div className='p-5 my-5 bg-white border rounded-md shadow-inner dark:bg-gray-800'>
				<h2 className='text-lg font-semibold text-gray-700 dark:text-gray-100'>
					Orders
				</h2>
				<table class='table-auto w-full my-5'>
					<thead>
						<tr className='py-2 text-sm text-left text-white capitalize bg-blue-500 shadow dark:bg-gray-700'>
							<th className='p-2 font-light'>#Order No.</th>
							<th className='p-2 font-light'>date</th>
							<th className='p-2 font-light'>customer name</th>
							<th className='p-2 font-light'>email</th>
							<th className='p-2 font-light'>amount</th>
							<th className='p-2 font-light'>status</th>
							<th className='p-2 font-light text-center'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className='overflow-auto'>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='p-2 text-sm '>217801</td>
							<td className='p-2 text-sm '>03/07/2021</td>
							<td className='p-2 text-sm '>Jane Cooper</td>
							<td className='p-2 text-sm '>
								janecooper@hotmail.com
							</td>
							<td className='p-2 text-sm '>$1240</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-blue-50 text-blue-700 font-light rounded-lg py-1.5 '>
									Pending
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
									className='px-3 bg-rose-500 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='p-2 text-sm '>217804</td>
							<td className='p-2 text-sm '>23/09/2020</td>
							<td className='p-2 text-sm '>James Smith</td>
							<td className='p-2 text-sm '>
								smithjames@gmail.com
							</td>
							<td className='p-2 text-sm '>$800</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
									Cancelled
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
									className='px-3 bg-rose-500 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='p-2 text-sm '>217571</td>
							<td className='p-2 text-sm '>04/28/2020</td>
							<td className='p-2 text-sm'>Bell Whiteney</td>
							<td className='p-2 text-sm '>
								bell.whites@ameritech.com
							</td>
							<td className='p-2 text-sm '>$560</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-rose-50 text-rose-700 font-light rounded-lg py-1.5 '>
									Cancelled
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
									className='px-3 bg-rose-500 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
								>
									Delete
								</Link>
							</td>
						</tr>
						<tr className='transition duration-200 ease-in border-b border-gray-200 hover:bg-neutral-100 hover:cursor-pointer text-neutral-700 dark:text-gray-100'>
							<td className='p-2 text-sm '>261818</td>
							<td className='p-2 text-sm '>23/08/2022</td>
							<td className='p-2 text-sm '>Anne Wilson</td>
							<td className='p-2 text-sm '>
								annewillys@comail.com
							</td>
							<td className='p-2 text-sm '>$2300</td>
							<td className='p-2 text-sm '>
								<span className='px-3 mr-2 bg-green-50 text-green-700 font-light rounded-lg py-1.5 '>
									Delivered
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
									className='px-3 bg-rose-500 text-white font-light rounded py-1.5 hover:bg-rose-700 transition duration-300 ease-in'
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

export default Orders;
