import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Content2 = () => {
  const titleStyle = {
    width: '500px',
    height: '49px',
    top: '132px',
    marginLeft: '8%',
    fontFamily: 'Satoshi',
    fontSize: '36px',
    fontWeight: '900',
    lineHeight: '49px',
    letterSpacing: '0.15em',
    textAlign: 'left',
  };

  return (
    <div>
      <div style={titleStyle}>
        <p>
          Products{" "}
          <ArrowForwardIosIcon style={{ fontSize: "24px", color: "blue" }} />{" "}
          <span style={{ fontSize: "16px", color: "blue" }}>
            Edit product
          </span>
        </p>
      </div>

      <form>
        <div className="px-8 py-8 space-y-4">
          <div class="grid gap-6 mb-6 sm:grid-cols-2 sx:grid-cols-2">
            <div class="flex items-center">
              <label
                for="sku"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >
                SKU 
              </label>&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                id="sku"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div class="grid gap-6 mb-6 sm:grid-cols-2 sx:grid-cols-2">
            <div class="flex items-center">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                Name
              </label>&nbsp;
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div class="flex items-center">
              <label
                for="qty"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                Qty
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                id="qty"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
          <br></br>

          {/* Product description */}
          <div className="textarea">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <p style={{ fontSize: "12px", color: "gray" }}>
              A small description about the product
            </p>
            <br></br>
            <textarea
              id="message"
              rows="3"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            ></textarea>
          </div>{" "}

          {/* Product Image */}
          <div className="productImages">
            <p style={{ paddingBottom: "4px" }}>
              Product
              Images&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "blue", textDecoration: "underline" }}>
                Edit Images
              </span>
            </p>

            <p style={{ fontSize: "12px", color: "gray" }}>
              JPEG,PNG,SVG or GIF
            </p>

            <p style={{ fontSize: "12px", color: "gray" }}>
              Maximum file size 50MB
            </p>
          </div>
          <br></br>

          {/* Button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Content2;
