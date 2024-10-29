import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, LeafyGreen, ArrowRight } from 'lucide-react';

const ShipperHome = () => {
  const features = [
    {
      title: 'Dashboard',
      description: 'Track your shipments and manage deliveries',
      icon: LayoutDashboard,
      link: '/shipper/dashboard',
      color: 'blue',
    },
    {
      title: 'Pricing',
      description: 'View rates and calculate shipping costs',
      icon: TrendingUp,
      link: '/shipper/pricing',
      color: 'green',
    },
    {
      title: 'Sustainability',
      description: 'Monitor and reduce your carbon footprint',
      icon: LeafyGreen,
      link: '/shipper/sustainability',
      color: 'emerald',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to FreightConnect AI</h1>
        <p className="mt-4 text-lg text-gray-600">
          Manage your shipments efficiently with AI-powered logistics
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <div className={`p-3 bg-${feature.color}-50 rounded-lg w-fit`}>
              <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-blue-600 flex items-center justify-between">
              {feature.title}
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
            <span className="font-medium">Create New Shipment</span>
            <p className="text-sm text-gray-600 mt-1">Set up a new freight delivery</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
            <span className="font-medium">Track Existing Shipment</span>
            <p className="text-sm text-gray-600 mt-1">Monitor your active deliveries</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipperHome;