import React from 'react';
import { Calculator, TrendingUp, DollarSign, Scale } from 'lucide-react';

const ShipperPricing = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Pricing Calculator</h1>

      {/* Calculator Form */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Origin
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter origin city"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Destination
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter destination city"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (lbs)
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter weight"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Calculate Price
        </button>
      </div>

      {/* Pricing Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Dynamic Pricing',
            description: 'Real-time rates based on market demand',
            icon: TrendingUp,
            color: 'blue',
          },
          {
            title: 'Cost Optimization',
            description: 'AI-powered suggestions for cost savings',
            icon: Calculator,
            color: 'green',
          },
          {
            title: 'Volume Discounts',
            description: 'Special rates for bulk shipments',
            icon: Scale,
            color: 'purple',
          },
        ].map((feature) => (
          <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className={`p-3 bg-${feature.color}-50 rounded-lg w-fit mb-4`}>
              <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Recent Quotes */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Quotes</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              route: 'NYC → Boston',
              weight: '2,500 lbs',
              price: '$800',
              date: '2024-03-15',
            },
            {
              route: 'Miami → Atlanta',
              weight: '4,200 lbs',
              price: '$1,200',
              date: '2024-03-14',
            },
            {
              route: 'LA → San Francisco',
              weight: '3,100 lbs',
              price: '$950',
              date: '2024-03-13',
            },
          ].map((quote, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{quote.route}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Weight: {quote.weight}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-900">
                    {quote.price}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{quote.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipperPricing;