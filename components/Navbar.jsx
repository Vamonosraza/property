import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-700 border-b border-blue-500'>
        <div className="m-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <button
                        type='button'
                        id='mobile-dropdown-button'
                        className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        aria-controls='mobile-menu'
                        aria-expanded='false'
                    >
                        <span className='absolute -inset-0.5'></span>
                        <span className='sr-only'>Open Main menu</span>
                        <svg
                            className='block h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <a className='flex flex-shrink-0 items-center' href='/index.html'>
                        <img
                            className='h-10 w-auto'
                            src=''
                            alt='Properties'
                        />
                        <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                            PropertyCat
                        </span>
                    </a>
                
                <div className="hidden md:ml-6 md:block">
                    
                </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar