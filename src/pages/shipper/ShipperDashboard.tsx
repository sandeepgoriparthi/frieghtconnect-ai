import React from 'react';
import { Package, TrendingUp, Clock, MapPin } from 'lucide-react';

const ShipperDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Shipper Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Shipments', value: '12', icon: Package, color: 'blue' },
          { title: 'Total Spent', value: '$24,500', icon: TrendingUp, color: 'green' },
          { title: 'Pending Deliveries', value: '3', icon: Clock, color: 'yellow' },
          { title: 'Delivery Routes', value: '8', icon: MapPin, color: 'purple' },
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

      {/* Recent Shipments */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Shipments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              id: 'SH-1234',
              destination: 'New York, NY',
              status: 'In Transit',
              date: '2024-03-15',
              cost: '$1,200',
            },
            {
              id: 'SH-1235',
              destination: 'Los Angeles, CA',
              status: 'Delivered',
              date: '2024-03-14',
              cost: '$2,300',
            },
            {
              id: 'SH-1236',
              destination: 'Chicago, IL',
              status: 'Pending',
              date: '2024-03-16',
              cost: '$1,800',
            },
          ].map((shipment) => (
            <div key={shipment.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">#{shipment.id}</p>
                  <p className="text-sm text-gray-600 mt-1">{shipment.destination}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{shipment.cost}</p>
                  <p className="text-sm text-gray-600 mt-1">{shipment.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipperDashboard;