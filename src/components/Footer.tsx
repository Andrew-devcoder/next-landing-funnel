import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
					<div className="max-w-xl lg:max-w-lg">
						<h2 className="text-4xl font-semibold tracking-tight text-white">
							Subscribe to our newsletter
						</h2>
						<p className="mt-4 text-lg text-gray-300">
							Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor
							incididunt dolore.
						</p>
						<div className="mt-6 flex max-w-md gap-x-4 items-center">
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<div className="flex gap-4">
								<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
									<FaFacebook className="w-6 h-6 text-blue-600" />
								</a>
								<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
									<FaInstagram className="w-6 h-6 text-pink-500" />
								</a>
								<a href="https://github.com" target="_blank" rel="noopener noreferrer">
									<FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
								</a>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
									<FaLinkedin className="w-6 h-6 text-blue-700" />
								</a>
								<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
									<FaYoutube className="w-6 h-6 text-red-600" />
								</a>
								<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
									<FaTwitter className="w-6 h-6 text-sky-500" />
								</a>
							</div>
							{/* <button
								type="submit"
								className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Subscribe
							</button> */}
						</div>
					</div>
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
							</div>
							<dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
							<dd className="mt-2 text-base/7 text-gray-400">
								Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo
								amet.
							</dd>
						</div>
						<div className="flex flex-col items-start">
							<div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
								<HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
							</div>
							<dt className="mt-4 text-base font-semibold text-white">No spam</dt>
							<dd className="mt-2 text-base/7 text-gray-400">
								Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt
								anim.
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				/>
			</div>
		</div>
	);
}
