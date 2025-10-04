import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Analytics = () => {
  const topMappings = [
    { term: 'Amlapitta', icd11: 'SM11', count: 1247 },
    { term: 'Jwara', icd11: 'SM62', count: 1089 },
    { term: 'Kaphaja Kasa', icd11: 'SM45', count: 956 },
    { term: 'Raktapitta', icd11: 'SM28', count: 823 },
    { term: 'Pandu Roga', icd11: 'SM34', count: 712 }
  ];

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <BarChart3 className="w-6 h-6 text-ayush-accent" />
        <h2 className="text-xl font-heading font-semibold text-gray-800">
          Mapping Analytics
        </h2>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Most frequently mapped AYUSH terms (Demo data)
      </p>

      <div className="space-y-3">
        {topMappings.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-ayush-light/30 to-icd-light/30 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className="bg-ayush-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{item.term}</p>
                <p className="text-xs text-gray-500">ICD-11: {item.icd11}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-bold text-gray-700">{item.count}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-ayush-primary">5,827</p>
            <p className="text-xs text-gray-600">Total Mappings</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-icd-primary">94.3%</p>
            <p className="text-xs text-gray-600">Avg Confidence</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-ayush-accent">156</p>
            <p className="text-xs text-gray-600">Unique Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
