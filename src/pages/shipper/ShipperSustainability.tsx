import React from 'react';
import { LeafyGreen, Truck, Recycle, BarChart3 } from 'lucide-react';

const ShipperSustainability = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            title: 'CO2 Saved',
            value: '12.5 tons',
            change: '+2.3%',
            icon: LeafyGreen,
            color: 'green',
          },
          {
            title: 'Green Routes',
            value: '85%',
            change: '+5%',
            icon: Truck,
            color: 'blue',
          },
          {
            title: 'Recycled Packaging',
            value: '92%',
            change: '+1.2%',
            icon: Recycle,
            color: 'purple',
          },
          {
            title: 'Efficiency Score',
            value: '94',
            change: '+3.8%',
            icon: BarChart3,
            color: 'yellow',
          },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-${stat.color}-50 rounded-lg`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <span className="text-green-600 text-sm font-medium">
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Emissions Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Carbon Emissions Overview
        </h2>
        <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
          <p className="text-gray-500">Emissions chart will be displayed here</p>
        </div>
      </div>

      {/* Sustainable Practices */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Green Initiatives
          </h2>
          <ul className="space-y-4">
            {[
              'Route optimization for minimal emissions',
              'Electric vehicle partnerships',
              'Sustainable packaging options',
              'Carbon offset programs',
            ].map((initiative, index) => (
              <li key={index} className="flex items-center">
                <LeafyGreen className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">{initiative}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Sustainability Goals
          </h2>
          <div className="space-y-4">
            {[
              { goal: 'Reduce CO2 emissions', target: '25%', progress: '65' },
              { goal: 'Green fleet adoption', target: '50%', progress: '40' },
              { goal: 'Waste reduction', target: '30%', progress: '80' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{item.goal}</span>
                  <span className="text-sm text-gray-600">
                    Target: {item.target}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipperSustainability;