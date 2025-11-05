import React, { useState } from 'react';
import { Eye, EyeOff, Truck, Package, Globe, ShoppingCart, UserCheck } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const features = [
    {
      icon: <Truck className="w-5 h-5" />,
      text: "Ship to 99.5% of India's population"
    },
    {
      icon: <Package className="w-5 h-5" />,
      text: "Assured COD remittance in 2 days at zero extra charges"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Ship Internationally to 220+ countries"
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      text: "Integrate with sales channels in one click"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      text: "Reduce order returns by 40% with RTO predictor & address validation"
    }
  ];

  const handleLogin = () => {
    console.log('Login clicked', { email, password });
    alert(`Here we Go ${email}`)
  };

  return (
    <div className=" bg-gray-50 my-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <div className="space-y-8">
            <div className="flex items-center gap-1">
              <span className="text-blue-800 font-bold text-3xl sm:text-4xl">ProDiligix</span>
              <span className=" text-white font-bold text-3xl sm:text-4xl px-1.5">🤝</span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-2">
                Login securely and get to access all ProDiligix's services
              </h1>
              <div className="h-1 w-16 bg-blue-500 mt-3"></div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-slate-600 mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-slate-700 text-base sm:text-lg">{feature.text}</p>
                </div>
              ))}
            </div>

            <p className="text-lg sm:text-xl font-medium text-slate-800 pt-4">
              Trusted by the thousands of businesses
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 mb-8">
              Login to your <span className='text-blue-500'>Account</span> 
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="support@prodiigix.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-slate-700 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Forgot Password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}