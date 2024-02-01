import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Grid1() {
  const products = [
    {
      sku: "#CA25",
      image: "assets/p1.png",
      productName: "Product-name",
      price: "$24.00",
    },
    {
        sku: "#CA34",
        image: "assets/p2.png",
        productName: "Product-name",
        price: "$24.00",
      },
      {
        sku: "#CA35",
        image: "assets/p3.png",
        productName: "Product-name",
        price: "$24.00",
      },
      {
        sku: "#CA56",
        image: "assets/p4.png",
        productName: "Product-name",
        price: "$24.00",
      }
  ];
  const deleteClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to undo this action if you proceed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
  

  return (
    <div className="container mx-auto my-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead style={{ color: '#001EB9' }} className="text-xs text-gray-700 uppercase dark:text-gray-400 text-primary">
            <tr>
              <th scope="col" className="px-6 py-3">
                SKU
              </th>
              <th scope="col" className="px-6 py-3">
                IMAGE
              </th>
              <th scope="col" className="px-6 py-3">
               PRODUCT NAME
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={`bg-white ${index === products.length - 1 ? '' : 'border-b'} dark:bg-gray-800 dark:border-gray-700`}
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.sku}
                </th>
                <td className="px-6 py-4">
                {product.image && (
            <img className="w-66 h-66"
              src={`${process.env.PUBLIC_URL}/${product.image}`}
              alt={product.productName}
              
            />
          )}
                </td>
                <td className="px-6 py-4">
                  {product.productName}
                </td>
                <td className="px-6 py-4">
                  {product.price}
                </td>


                <td className="px-6 py-4 text-right">
  <a href="#" className="flex items-center space-x-2">
    {/* Image button 1 */}
    <Link to="/deleteproduct">  
    <button onClick={deleteClick}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/d.png`}
        alt="Button 1"
        className="w-6 h-6"
      />
      
    </button>
    </Link>

    {/* Image button 2 */}
   

    {/* Image button 3 */}

    <Link to="/editproduct">  
    <button>
     
        <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v3m5-3v3m5-3v3M1 7h7m1.506 3.429 2.065 2.065M19 7h-2M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 13H6v-2l5.227-5.292a1.46 1.46 0 0 1 2.065 2.065L8 16Z"/>
</svg>
      {/* /> */}
    </button>
    </Link>

    <button>
      <img
        src={`${process.env.PUBLIC_URL}/assets/a.png`}
        alt="Button 2"
        className="w-6 h-6"
      />
    </button>
  </a>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
