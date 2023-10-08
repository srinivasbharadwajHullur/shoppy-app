import React from 'react'

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-green-600 text-3xl font-semibold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-4">
          Your order has been successfully placed. Thank you for shopping with us!
        </p>
        <p className="text-gray-600 mb-4">Order Number: #123456</p>
        <p className="text-gray-600 mb-4">Estimated Delivery Date: October 15, 2023</p>
        <div className="mb-4">
          <p className="text-gray-600 mb-2">Delivery Address:</p>
          <address className="text-gray-800">
            John Doe<br />
            123 Main Street<br />
            City, State 12345<br />
            Country
          </address>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage