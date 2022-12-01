import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="bg-extreme">
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-spicy">
				<span className="sr-only">Error</span> API Error
			</h2>
			<p className="text-2xl font-semibold md:text-3xl text-hot">Sorry, we couldn't fetch the data for the address/es you entered.</p> <br />
			<p className="text-2xl font-semibold md:text-xl text-hot">Please try a different address or try again later! <br /> Sorry for the inconvenience caused! </p> <br /> <br />
			<Link to="/" className="mt-5 text-mild bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-800 shadow-lg dark:shadow-lg shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1">Back To Homepage</Link>
		</div>
	</div>
</section>
    </div>
  )
}

export default Error;