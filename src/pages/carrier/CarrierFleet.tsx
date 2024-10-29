import React from 'react';
import { Truck, Users, Route, Settings } from 'lucide-react';

const CarrierFleet = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Fleet Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Vehicle
        </button>
      </div>

      {/* Fleet Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: 'Total Vehicles', value: '12', icon: Truck, color: 'blue' },
          { title: 'Active Drivers', value: '18', icon: Users, color: 'green' },
          { title: 'Routes Today', value: '8', icon: Route, color: 'purple' },
          {
            title: 'Maintenance Due',
            value: '3',
            icon: Settings,
            color: 'yellow',
          },
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

      {/* Vehicle List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Vehicle Fleet</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              id: 'TRK-001',
              type: '18-Wheeler',
              driver: 'John Smith',
              status: 'Active',
              location: 'Route 66, OK',
            },
            {
              id: 'TRK-002',
              type: 'Box Truck',
              driver: 'Sarah Johnson',
              status: 'Loading',
              location: 'Dallas, TX',
            },
            {
              id: 'TRK-003',
              type: 'Flatbed',
              driver: 'Mike Wilson',
              status: 'Maintenance',
              location: 'Chicago, IL',
            },
          ].map((vehicle) => (
            <div key={vehicle.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Truck className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {vehicle.id} - {vehicle.type}
                    </p>
                    <p className="text-sm text-gray-600">
                      Driver: {vehicle.driver}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {vehicle.status}
                  </p>
                  <p className="text-sm text-gray-600">{vehicle.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Maintenance Schedule
        </h2>
        <div className="space-y-4">
          {[
            {
              vehicle: 'TRK-001',
              service: 'Oil Change',
              date: '2024-03-20',
              status: 'Scheduled',
            },
            {
              vehicle: 'TRK-002',
              service: 'Brake Inspection',
              date: '2024-03-22',
              status: 'Pending',
            },
            {
              vehicle: 'TRK-003',
              service: 'Tire Rotation',
              date: '2024-03-25',
              status: 'Scheduled',
            },
          ].map((maintenance, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">
                  {maintenance.vehicle} - {maintenance.service}
                </p>
                <p className="text-sm text-gray-600">Date: {maintenance.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  maintenance.status === 'Scheduled'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {maintenance.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarrierFleet;