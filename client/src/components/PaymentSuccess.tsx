import React from 'react'
import { SuccessAnimation } from './SuccessAnimation.tsx'


export default function PaymentSuccess() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Payment Successful</h1>
        <SuccessAnimation />
        <p className="mt-6 text-center text-gray-600">Your payment has been processed successfully.</p>
      </div>
    </main>
  )
}

