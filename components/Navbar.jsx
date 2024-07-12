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
                            aria-expanded='false'>

                            <span className='absolute -inset-0.5'></span>
                            <span className='sr-only'>Open Main menu</span>
                            <svg
                                className='block h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke-width='1.5'
                                stroke='currentColor'
                                aria-hidden='true'>

                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <a className='flex flex-shrink-0 items-center' href='/index.html'>
                            <img
                                className='h-10 w-auto'
                                src=''
                                alt='Properties'/>
                            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                                PropertyCat
                            </span>
                        </a>
                    
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-2">
                                <a href="/index" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                Home</a>
                                <a href="/properties" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Properties</a>
                                <a href="/add-properties" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Add-Properties</a>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:block md:ml-6">
                        <div class="flex items-center">
                            <button
                            class="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                <i class="fa-brands fa-google text-white mr-2"></i>
                                <span>Login or Register</span>
                            </button>
                        </div>
                    </div>

                    <div
                        class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">

                        <a href="messages.html" class="relative group">
                            <button
                                type="button"
                                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">

                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>

                                </svg>
                            </button>
                            <span
                                class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                2
                                
                            </span>
                        </a>

                        <div class="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true">

                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        src="images/profile.png"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div
                                id="user-menu"
                                class="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                                tabindex="-1">

                                <a
                                    href="/profile.html"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                    >Your Profile</a>

                                <a
                                    href="saved-properties.html"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                    >Saved Properties</a>

                                <a
                                    href="#"
                                    class="block px-4 py-2 text-sm text-gray-700"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                    >Sign Out</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar