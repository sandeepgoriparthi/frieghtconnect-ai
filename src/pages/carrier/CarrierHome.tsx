import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Truck, DollarSign, ArrowRight } from 'lucide-react';

const CarrierHome = () => {
  const features = [
    {
      title: 'Dashboard',
      description: 'Monitor your active routes and deliveries',
      icon: LayoutDashboard,
      link: '/carrier/dashboard',
      color: 'blue',
    },
    {
      title: 'Fleet Management',
      description: 'Manage your vehicles and drivers',
      icon: Truck,
      link: '/carrier/fleet',
      color: 'indigo',
    },
    {
      title: 'Earnings',
      description: 'Track revenue and payment history',
      icon: DollarSign,
      link: '/carrier/earnings',
      color: 'green',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to FreightConnect AI</h1>
        <p className="mt-4 text-lg text-gray-600">
          Optimize your fleet operations with AI-powered route matching
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
            <span className="font-medium">Find Available Loads</span>
            <p className="text-sm text-gray-600 mt-1">Browse new shipping opportunities</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-left">
            <span className="font-medium">Update Truck Status</span>
            <p className="text-sm text-gray-600 mt-1">Manage your vehicle availability</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarrierHome;