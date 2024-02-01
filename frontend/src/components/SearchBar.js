import React from 'react';
import 'flowbite';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function () {

return (
    <Box display="flex"style={{ marginLeft: '8%'}}className=" relative mt-8 ">
    <div style={{ width:'58%'}}>
    <form  className=" relative ">
   
        
       <input style={{ width:"100%" }}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Products"
            required
        />
        <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-3 m-2 text-sm font-medium text-white bg-blue-700 rounded-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
            Search
        </button>
       
    </form>  
  </div>

<div display="flex"className=" relative "style={{ marginLeft: '7%',}}>
<Link to="/newproduct">  
<button type="button"style={{width:'150px'}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Product</button>
</Link>

<Link to="/favourite">  
<button type="button"display="flex" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">

<img src="./assets/a.png" alt="Image" className="w-5 h-4 me-2" />
</button>
</Link>
 </div>
 </Box>

  )
}

