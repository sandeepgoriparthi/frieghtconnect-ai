import React from 'react';
import { DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';

const CarrierEarnings = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Earnings Overview</h1>

      {/* Earnings Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Earnings',
            value: '$45,250',
            change: '+12.5%',
            icon: DollarSign,
            color: 'green',
          },
          {
            title: 'This Month',
            value: '$8,420',
            change: '+5.2%',
            icon: Calendar,
            color: 'blue',
          },
          {
            title: 'Average Load',
            value: '$950',
            change: '+3.8%',
            icon: TrendingUp,
            color: 'purple',
          },
          {
            title: 'Pending Payments',
            value: '$2,840',
            change: '-2.1%',
            icon: CreditCard,
            color: 'yellow',
          },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-${stat.color}-50 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.change.startsWith('+')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Earnings History
        </h2>
        <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
          <p className="text-gray-500">Earnings chart will be displayed here</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              id: 'INV-001',
              route: 'NYC → Boston',
              amount: '$1,200',
              status: 'Paid',
              date: '2024-03-15',
            },
            {
              id: 'INV-002',
              route: 'Miami → Atlanta',
              amount: '$950',
              status: 'Pending',
              date: '2024-03-14',
            },
            {
              id: 'INV-003',
              route: 'LA → San Francisco',
              amount: '$850',
              status: 'Paid',
              date: '2024-03-13',
            },
          ].map((transaction) => (
            <div key={transaction.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">
                    {transaction.route}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Invoice: {transaction.id}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">
                    {transaction.amount}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      transaction.status === 'Paid'
                        ? 'text-green-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Payment Methods
        </h2>
        <div className="space-y-4">
          {[
            {
              type: 'Bank Account',
              details: '****1234',
              status: 'Primary',
            },
            {
              type: 'Credit Card',
              details: '****5678',
              status: 'Backup',
            },
          ].map((method, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <CreditCard className="w-6 h-6 text-gray-400 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{method.type}</p>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  method.status === 'Primary'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {method.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrierEarnings;