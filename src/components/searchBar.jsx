import React from 'react'

export default function searchBar() {
    return (
        <>
            <span className=" mt-12 ml-8 z-5" >
                <span className="z-10 xl:w-96">
                    <input
                        type="search"
                        className="form-control
                        block
                        w-half
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                         bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        shadow-lg shadow-slate-100 
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleSearch"
                        placeholder="Search Landings"
                    />
                </span>
            </span>
        </>
    )
}
