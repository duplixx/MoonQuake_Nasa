import React from 'react'

export default function searchBar() {
    return (
        <>
            <span className="absolute mt-12 ml-8 z-5" >
                <div className="z-90 xl:w-96">
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
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleSearch"
                        placeholder="Search Landings"
                    />
                </div>
            </span>
        </>
    )
}
