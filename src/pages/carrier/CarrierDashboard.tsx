import React from 'react';
import { Truck, DollarSign, Route, Package } from 'lucide-react';

const CarrierDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Carrier Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Routes', value: '5', icon: Route, color: 'blue' },
          { title: 'Total Earnings', value: '$18,500', icon: DollarSign, color: 'green' },
          { title: 'Available Trucks', value: '8', icon: Truck, color: 'yellow' },
          { title: 'Delivered Loads', value: '124', icon: Package, color: 'purple' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 bg-${stat.color}-50 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available Loads */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Available Loads</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              id: 'LD-1234',
              route: 'NYC → Boston',
              weight: '2,500 lbs',
              price: '$800',
              pickup: '2024-03-16',
            },
            {
              id: 'LD-1235',
              route: 'Miami → Atlanta',
              weight: '4,200 lbs',
              price: '$1,200',
              pickup: '2024-03-17',
            },
            {
              id: 'LD-1236',
              route: 'Seattle → Portland',
              weight: '3,100 lbs',
              price: '$600',
              pickup: '2024-03-18',
            },
          ].map((load) => (
            <div key={load.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{load.route}</p>
                  <p className="text-sm text-gray-600 mt-1">Weight: {load.weight}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{load.price}</p>
                  <p className="text-sm text-gray-600 mt-1">Pickup: {load.pickup}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrierDashboard;