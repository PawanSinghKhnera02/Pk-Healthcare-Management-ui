import React, { useState } from "react";
import { FaGooglePay, FaPhone, FaPaypal } from "react-icons/fa";
import QRCode from "react-qr-code";
import Footer from "../Footer/Footer";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("");

  // Handler for amount change
  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (

    <>
    <section className="min-h-screen bg-gradient-to-br from-teal-100 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-6">Make a Difference</h2>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          Your generous support helps us bring healthcare to communities in need. Every contribution counts. Thank you for making a difference.
        </p>

        {/* Donation Input Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Choose Your Donation Amount</h3>
          <input
            type="number"
            value={donationAmount}
            onChange={handleAmountChange}
            className="w-full p-4 text-lg rounded-xl border-2 border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter donation amount"
            min="1"
          />
          <p className="text-center text-gray-500 text-sm">
            Any amount is appreciated. Your support goes a long way.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="bg-gray-50 p-6 rounded-xl text-center mb-12">
          <h4 className="font-bold text-lg mb-4">Scan to Donate (UPI)</h4>
          <div className="flex justify-center mb-4">
            <QRCode value="pkhealthcare@upi" size={128} />
          </div>
          <p className="text-sm text-gray-600">Scan this QR code using your UPI-enabled app to make a donation.</p>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 p-6 rounded-xl text-center mb-12">
          <h4 className="font-bold text-lg mb-4">Other Payment Methods</h4>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {/* Google Pay */}
            <div className="border p-4 rounded-xl hover:bg-gray-100 transition">
              <div className="flex items-center justify-center mb-2">
                <FaGooglePay className="text-4xl text-blue-500" />
              </div>
              <p className="text-xl font-semibold text-gray-800">Google Pay</p>
              <p className="text-gray-600">Use your Google Pay app with UPI ID: pkhealthcare@upi</p>
            </div>
            {/* PhonePe */}
            <div className="border p-4 rounded-xl hover:bg-gray-100 transition">
              <div className="flex items-center justify-center mb-2">
                <FaPhone className="text-4xl text-purple-500" />
              </div>
              <p className="text-xl font-semibold text-gray-800">PhonePe</p>
              <p className="text-gray-600">Use your PhonePe app with UPI ID: pkhealthcare@upi</p>
            </div>
            {/* Paytm */}
            <div className="border p-4 rounded-xl hover:bg-gray-100 transition">
              <div className="flex items-center justify-center mb-2">
                <FaPaypal className="text-4xl text-blue-600" />
              </div>
              <p className="text-xl font-semibold text-gray-800">Paytm</p>
              <p className="text-gray-600">Use your Paytm app with UPI ID: pkhealthcare@upi</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={() => alert(`Thank you for donating ₹${donationAmount}`)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Donate ₹{donationAmount || "?"}
          </button>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  );
};

export default Donate;
