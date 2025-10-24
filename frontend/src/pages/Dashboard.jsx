import { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#6896ff] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white font-['Nunito_Sans']">
            LedgerWise Dashboard
          </h1>
          <Link 
            to="/"
            className="bg-white text-[#4880ff] px-6 py-3 rounded-lg font-semibold font-['Nunito_Sans'] hover:bg-gray-100 transition-colors"
          >
            Logout
          </Link>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
            Welcome to LedgerWise
          </h2>
          <p className="text-lg text-[#202224] opacity-80 font-['Nunito_Sans']">
            Your comprehensive financial management platform is ready to help you track, analyze, and optimize your finances.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Overview Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Account Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Total Balance:</span>
                <span className="font-bold text-[#4880ff] font-['Nunito_Sans']">$12,450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Active Accounts:</span>
                <span className="font-bold text-[#202224] font-['Nunito_Sans']">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Monthly Growth:</span>
                <span className="font-bold text-green-500 font-['Nunito_Sans']">+5.2%</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Recent Transactions
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#202224] font-['Nunito_Sans']">Grocery Store</p>
                  <p className="text-sm text-[#202224] opacity-60 font-['Nunito_Sans']">Today</p>
                </div>
                <span className="font-bold text-red-500 font-['Nunito_Sans']">-$87.50</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#202224] font-['Nunito_Sans']">Salary Deposit</p>
                  <p className="text-sm text-[#202224] opacity-60 font-['Nunito_Sans']">Yesterday</p>
                </div>
                <span className="font-bold text-green-500 font-['Nunito_Sans']">+$3,200.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-[#202224] font-['Nunito_Sans']">Electric Bill</p>
                  <p className="text-sm text-[#202224] opacity-60 font-['Nunito_Sans']">2 days ago</p>
                </div>
                <span className="font-bold text-red-500 font-['Nunito_Sans']">-$125.00</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-[#4880ff] text-white py-3 rounded-lg font-semibold font-['Nunito_Sans'] hover:bg-[#91b1fb] transition-colors">
                Add Transaction
              </button>
              <button className="w-full bg-[#e2e0f4] text-[#202224] py-3 rounded-lg font-semibold font-['Nunito_Sans'] hover:bg-[#d1cfe8] transition-colors">
                View Reports
              </button>
              <button className="w-full bg-[#e2e0f4] text-[#202224] py-3 rounded-lg font-semibold font-['Nunito_Sans'] hover:bg-[#d1cfe8] transition-colors">
                Manage Budget
              </button>
            </div>
          </div>

          {/* Budget Overview Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Budget Overview
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Food & Dining</span>
                  <span className="font-semibold text-[#202224] font-['Nunito_Sans']">$450 / $600</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4880ff] h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Transportation</span>
                  <span className="font-semibold text-[#202224] font-['Nunito_Sans']">$180 / $300</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4880ff] h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Entertainment</span>
                  <span className="font-semibold text-[#202224] font-['Nunito_Sans']">$95 / $200</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4880ff] h-2 rounded-full" style={{width: '47.5%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Financial Goals
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#202224] font-semibold font-['Nunito_Sans']">Emergency Fund</span>
                  <span className="text-sm text-[#202224] opacity-60 font-['Nunito_Sans']">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className="text-sm text-[#202224] opacity-60 mt-1 font-['Nunito_Sans']">$8,500 / $10,000</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#202224] font-semibold font-['Nunito_Sans']">Vacation Fund</span>
                  <span className="text-sm text-[#202224] opacity-60 font-['Nunito_Sans']">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4880ff] h-2 rounded-full" style={{width: '42%'}}></div>
                </div>
                <p className="text-sm text-[#202224] opacity-60 mt-1 font-['Nunito_Sans']">$2,100 / $5,000</p>
              </div>
            </div>
          </div>

          {/* Investment Summary Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#202224] mb-4 font-['Nunito_Sans']">
              Investment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Portfolio Value:</span>
                <span className="font-bold text-[#4880ff] font-['Nunito_Sans']">$25,840.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Today's Change:</span>
                <span className="font-bold text-green-500 font-['Nunito_Sans']">+$156.20 (+0.6%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#202224] opacity-70 font-['Nunito_Sans']">Total Return:</span>
                <span className="font-bold text-green-500 font-['Nunito_Sans']">+12.4%</span>
              </div>
              <button className="w-full mt-4 bg-[#e2e0f4] text-[#202224] py-2 rounded-lg font-semibold font-['Nunito_Sans'] hover:bg-[#d1cfe8] transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
