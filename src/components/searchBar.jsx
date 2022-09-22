import React,{ useState } from 'react'
import data from '../assets/data';
import { useSpring, UseSpring } from '@react-spring/three';

export default function Search() {
    const [value, setValue] = useState("");
    const onChange = (event) => {
        setValue(event.target.value);
      };
    
        const onSearch = (searchTerm) => {
        setValue(searchTerm);
      };
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
                        value={value} onChange={onChange}
                    />
                </span>
                <div className="bg-slate-300 flex flex-col rounded-b-2xl font-semibold text-center opacity-70  ">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const Apollo = item.name.toLowerCase();

              return (
                searchTerm &&
                Apollo.startsWith(searchTerm) &&
                Apollo !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="hover:opacity-90 opacity-40 text-start hover:text-bold "
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
            </span>
        </>
    )
}
