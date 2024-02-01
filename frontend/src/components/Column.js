import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Column = () => {
  return (
    <Grid container spacing={2}>
      {/* First Column */}
      <Grid item xs={7}>
      <form style={{ marginLeft: '8%' }} className="flex items-center relative w-1/2 mt-8">
        <input
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
      </Grid>

      {/* Second Column */}
      <Grid item xs={5}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6">Column 2</Typography>
          <p>Content for the second column goes here.</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Column;
