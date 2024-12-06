const Login = () => {
	return (
		<div className='w-100 h-screen grid grid-cols-2 pt-24 pl-96 bg-gray-100'>
			{/* left */}
			<div className='w-50'>
				<div>
					<h1 className='text-5xl font-bold text-blue-600'>fakebook</h1>
					<h2 className='mt-4 text-5xl font-extralight text-gray-600'>
						Recent logins
					</h2>
					<p className='mt-2 mb-4 text-gray-500'>
						Click your picture or add an account
					</p>
				</div>
				{/* cards */}
				<div className='flex flex-row gap-4'>
					<div className=' drop-shadow-md hover:drop-shadow-xl'>
						{/* Add Account */}
						<div className='h-52 w-40 rounded-xl bg-white'>
							<div className='h-[80%] rounded-tl-xl rounded-tr-xl bg-gray-200 flex items-center justify-center'>
								<span className='h-10 w-10 rounded-full text-white bg-blue-600 text-4xl text-center'>
									{" "}
									+
								</span>
							</div>
							<p className='text-center mt-2 text-blue-600'>Add Account</p>
						</div>
					</div>
				</div>
			</div>

			{/* right */}
			<div>
				{/* form */}
				<div className='flex flex-col w-[50%] p-8 rounded-lg bg-white drop-shadow-lg mt-10'>
					<input
						className='outline-none px-4 py-2 border-gray-300 border-2 rounded-md mb-2'
						type='text'
						placeholder='Email address or phone number'
					/>

					<input
						className='outline-none px-4 py-2 border-gray-300 border-2 rounded-md mb-4'
						type='password'
						placeholder='Password'
					/>

					<button className='bg-blue-600 text-white py-2 rounded-lg'>
						Log in
					</button>

					<a href='#' className='text-center my-4 text-blue-500'>
						Forgotten password?
					</a>
					<hr />
					<button className='my-4 bg-green-600 text-white py-2 rounded-lg font-bold'>
						Create new account
					</button>
				</div>
				<p className='inline-block my-4'>
					{" "}
					<strong> Create a Page </strong>for a celebrity, brand or business
				</p>
			</div>
		</div>
	);
};

export default Login;
