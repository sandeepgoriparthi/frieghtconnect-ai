import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Building2, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FreightConnect AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The intelligent logistics platform connecting shippers with carriers
          </p>
        </div>

        {/* Login Options */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Shipper Card */}
          <button
            onClick={() => navigate('/login/shipper')}
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:transform group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">For Shippers</h2>
            <p className="text-gray-600">
              Find available trucks and optimize your shipping operations with AI-powered matching
            </p>
          </button>

          {/* Carrier Card */}
          <button
            onClick={() => navigate('/login/carrier')}
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-100 hover:border-indigo-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Truck className="w-8 h-8 text-indigo-600" />
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-indigo-500 group-hover:transform group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">For Carriers</h2>
            <p className="text-gray-600">
              Maximize your fleet efficiency and find loads that match your routes
            </p>
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Powered by Advanced AI Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Smart Matching',
                description: 'AI-driven algorithms match loads with available capacity',
              },
              {
                title: 'Route Optimization',
                description: 'Efficient routes that save time and reduce emissions',
              },
              {
                title: 'Dynamic Pricing',
                description: 'Real-time market-based pricing for maximum efficiency',
              },
            ].map((feature) => (
              <div key={feature.title} className="p-6 bg-white/50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;