import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { RiAccountPinBoxLine, RiArrowLeftLine } from "react-icons/ri";
import {
	AiOutlineHome,
	AiOutlineMessage,
	AiOutlineSetting,
} from "react-icons/ai";
import { TiShoppingBag } from "react-icons/ti";
import { BsFileEarmarkEasel } from "react-icons/bs";

import Logo from "../assets/images/logo.svg";
import Toggle from "./ThemeToggle";

const Sidebar = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const Menus = [
		{ title: "Dashboard", path: "/", src: <AiOutlineHome /> },
		{ title: "Orders", path: "/orders", src: <BsFileEarmarkEasel /> },
		{ title: "Products", path: "/products", src: <TiShoppingBag /> },
		{
			title: "Customers",
			path: "/customers",
			src: <RiAccountPinBoxLine />,
		},
		{
			title: "Messages",
			path: "/messages",
			src: <AiOutlineMessage />,
		},
		{
			title: "Settings",
			path: "/settings",
			src: <AiOutlineSetting />,
			gap: true,
		},
	];

	return (
		<>
			<div
				className={`${
					open ? "w-52" : "w-fit"
				} hidden sm:block relative h-screen transition duration-500 ease-in-out bg-white dark:bg-gray-800`}
			>
				<RiArrowLeftLine
					className={`${
						!open && "rotate-180"
					} absolute text-2xl text-gray-500 cursor-pointer top-4 -right-0 dark:fill-gray-400 dark:bg-gray-800 transition duration-500 ease-in-out`}
					onClick={() => setOpen(!open)}
				/>
				<Link to='/'>
					<div
						className={`flex items-center ${
							open && "gap-x-4"
						} px-3 pt-3 mb-4`}
					>
						<img src={Logo} alt='' className='pl-2' />
						{open && (
							<span className='text-xl font-medium whitespace-nowrap dark:text-white'>
								Goal Quest
							</span>
						)}
					</div>
				</Link>

				<ul className='pt-6'>
					{Menus.map((menu, index) => (
						<Link to={menu.path} key={index}>
							<li
								className={`flex items-center gap-x-3 mb-3 mx-3  px-3 py-1.5 rounded cursor-pointer text-neutral-700 hover:bg-blue-500 hover:text-white dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out
                        ${menu.gap ? "mt-9" : "mt-2"} ${
									location.pathname === menu.path &&
									"bg-blue-500 text-neutral-50 dark:bg-neutral-700"
								}`}
							>
								<span className='text-xl'>{menu.src}</span>
								<span
									className={`${
										!open && "hidden"
									} origin-left text-sm duration-300 hover:block`}
								>
									{menu.title}
								</span>
							</li>
						</Link>
					))}
				</ul>
				<div className='absolute bottom-5 left-4'>
					<Toggle />
				</div>
			</div>
		</>
	);
};

export default Sidebar;
