import React, { useState, useEffect } from "react";

const Emi = () => {
  const [loanType, setLoanType] = useState("Home Loan");
  const [principal, setPrincipal] = useState(500000); 
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [yearlyInterest, setYearlyInterest] = useState(0);

  useEffect(() => {
    const P = principal;
    const N = tenure * 12; // months
    const r = interestRate / 12 / 100; // monthly interest rate

    // Bank style EMI with rounding
    const emiValue = Math.ceil((P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1));
    const totalAmt = emiValue * N;
    const interestAmt = totalAmt - P;
    const yearlyInt = interestAmt / tenure;

    setEmi(emiValue);
    setTotalAmount(totalAmt);
    setTotalInterest(interestAmt);
    setYearlyInterest(yearlyInt.toFixed(0));
  }, [principal, interestRate, tenure]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-indigo-50 to-purple-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-5xl w-full flex flex-col md:flex-row gap-6">
        
        {/* Left section: Inputs */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left">EMI Calculator</h2>

          {/* Loan Type */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Loan Type</label>
            <select
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option>Home Loan</option>
              <option>Personal Loan</option>
              <option>Vehicle Loan</option>
              <option>Education Loan</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Loan Amount: ₹{principal.toLocaleString()}</label>
            <input
              type="range"
              min="50000"
              max="10000000"
              step="10000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-3 rounded-lg accent-indigo-500"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Interest Rate: {interestRate}%</label>
            <input
              type="range"
              min="5"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-3 rounded-lg accent-indigo-500"
            />
          </div>

          {/* Tenure */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Tenure: {tenure} years</label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-3 rounded-lg accent-indigo-500"
            />
          </div>
        </div>

        {/* Right section: EMI Output */}
        <div className="flex-1 bg-indigo-50 p-6 rounded-2xl shadow-inner text-center md:text-left md:flex md:flex-col md:justify-center space-y-4">
          <h3 className="text-xl font-semibold mb-2">Estimated EMI</h3>
          <p className="text-3xl font-bold text-indigo-700 mb-2">₹ {emi.toLocaleString()} / Month</p>

          <div className="text-gray-700 space-y-1">
            <p><strong>Principal:</strong> ₹ {principal.toLocaleString()}</p>
            <p><strong>Total Interest:</strong> ₹ {totalInterest.toLocaleString()}</p>
            <p><strong>Total Amount:</strong> ₹ {totalAmount.toLocaleString()}</p>
            <p><strong>Yearly Interest:</strong> ₹ {yearlyInterest.toLocaleString()}</p>
          </div>

          <div className="bg-gray-800 text-white rounded-xl py-2 px-4 mt-4 w-max mx-auto md:mx-0">
            <p className="font-semibold">{tenure * 12} Months</p>
          </div>

          <p className="text-gray-600 mt-2">
            For a {loanType} with {tenure} years tenure at {interestRate}% interest rate.
          </p>
        </div>
      </div>
    </div>

    
  );
};

export default Emi;
