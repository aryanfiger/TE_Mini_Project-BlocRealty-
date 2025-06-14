import React from "react";
import { Banknote, Calendar, ClipboardList, FileText, Home, Users } from "lucide-react";

const Tenant = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🏡 Tenant Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tenant Information */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Avatar"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-green-600">johndoe@tms.com</p>
          </div>
        </div>

        {/* Lease Overview */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <Home className="text-blue-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Lease Overview</h2>
          </div>
          <p><strong>🏠 Property:</strong> 123 Main Street</p>
          <p><strong>📅 Lease Start:</strong> Jan 1, 2023</p>
          <p><strong>📅 Lease End:</strong> Jun 31, 2024</p>
          <p><strong>💰 Security Deposit:</strong> $1000</p>
        </div>

        {/* Payment History */}
        <div className="bg-white p-6 rounded-xl shadow-md col-span-1 md:col-span-2">
          <div className="flex items-center mb-3">
            <Banknote className="text-green-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Payment History</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-2">Payment Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {["September", "October", "November"].map((month, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{month} 2023</td>
                  <td className="p-2">$1200</td>
                  <td className="p-2 text-green-500">✅ Paid</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
            View Invoices
          </button>
        </div>

        {/* Maintenance Status */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <ClipboardList className="text-yellow-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Maintenance Status</h2>
          </div>
          <p><strong>#001:</strong> <span className="text-yellow-500">🛠 In Progress</span></p>
          <p><strong>#002:</strong> <span className="text-green-500">✅ Completed</span></p>
          <p><strong>#003:</strong> <span className="text-gray-500">⌛ Pending</span></p>
        </div>

        {/* Rules and Regulations */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <Users className="text-red-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Rules & Regulations</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>🚫 No pets allowed</li>
            <li>🔇 Quiet hours: 10 PM - 7 AM</li>
            <li>🚭 No smoking indoors</li>
          </ul>
        </div>

        {/* Lease Terms */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-3">
            <FileText className="text-purple-500" size={20} />
            <h2 className="text-lg font-semibold text-gray-800 ml-2">Termination & Renewal</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>📅 30-day notice required for termination</li>
            <li>🔄 Lease can be renewed for 12 months</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tenant;
