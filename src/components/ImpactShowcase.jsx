import { AlertCircle, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

const ImpactShowcase = () => {
  const currentProblems = [
    { text: "Not recorded digitally", icon: "❌" },
    { text: "Recorded as generic 'Digestive disorder' (loses meaning)", icon: "❌" },
    { text: "Insurance claim rejected (no ICD code)", icon: "❌" },
    { text: "ABDM cannot track AYUSH treatments", icon: "❌" }
  ];

  const ayubridgeBenefits = [
    { text: "Digital record maintained", icon: "✅" },
    { text: "Insurance claim possible", icon: "✅" },
    { text: "ABDM tracks AYUSH usage", icon: "✅" },
    { text: "Doctor sees familiar 'Amlapitta'", icon: "✅" },
    { text: "Hospital sees standard SM11", icon: "✅" },
    { text: "Researchers get proper data", icon: "✅" }
  ];

  const workflow = [
    { step: "Doctor diagnoses", detail: '"Amlapitta"' },
    { step: "Enters in EMR", detail: "with AyuBridge" },
    { step: "System maps", detail: "ICD-11: SM11" },
    { step: "Preserves original", detail: "NAMASTE: AYU-DIG-015" },
    { step: "Generates", detail: "FHIR Bundle" },
    { step: "Stores in EMR", detail: "Both codes saved" }
  ];

  return (
    <div className="space-y-4">
      {/* Problem Statement Banner - Compact */}
      <div className="card bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 py-3">
        <div className="flex items-start space-x-2">
          <Lightbulb className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-base font-heading font-bold text-gray-800 mb-0.5">
              Problem Statement #25024
            </h2>
            <p className="text-gray-700 text-xs">
              API Development for Integrating NAMASTE & ICD-11 (TM2) with Indian EHR-Compliant EMRs
            </p>
          </div>
        </div>
      </div>

      {/* Before vs After - Compact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* BEFORE */}
        <div className="card bg-gradient-to-br from-red-50 to-orange-50 py-3">
          <div className="flex items-center space-x-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <h3 className="text-sm font-heading font-bold text-gray-800">Current Challenge</h3>
          </div>
          <div className="bg-white rounded p-2 mb-2 text-xs">
            <p className="font-semibold text-gray-700 mb-1">Scenario:</p>
            <p className="text-gray-600">1. Doctor diagnoses "Amlapitta" → 2. Paper register → 3. EMR can't store it</p>
          </div>
          <div className="space-y-1">
            {currentProblems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-1.5 text-xs">
                <span className="flex-shrink-0">{problem.icon}</span>
                <span className="text-gray-700">{problem.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AFTER */}
        <div className="card bg-gradient-to-br from-green-50 to-blue-50 py-3">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <h3 className="text-sm font-heading font-bold text-gray-800">With AyuBridge API</h3>
          </div>
          <div className="bg-white rounded p-2 mb-2 text-xs">
            <p className="font-semibold text-gray-700 mb-1">Automated Workflow:</p>
            <p className="text-gray-600">1. Doctor enters "Amlapitta" → 2. System maps → 3. Both codes stored</p>
          </div>
          <div className="space-y-1">
            {ayubridgeBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-1.5 text-xs">
                <span className="flex-shrink-0">{benefit.icon}</span>
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Workflow - Compact */}
      <div className="card bg-gradient-to-br from-blue-50 to-purple-50 py-3">
        <h3 className="text-sm font-heading font-bold text-gray-800 mb-2">
          How AyuBridge Works
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {workflow.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded p-2 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-ayush-primary to-icd-primary text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-1 text-xs font-bold">
                  {index + 1}
                </div>
                <p className="text-xs font-semibold text-gray-800">{item.step}</p>
                <p className="text-xs text-gray-600">{item.detail}</p>
              </div>
              {index < workflow.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Innovation - Compact */}
      <div className="card bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-sm font-heading font-bold text-gray-800 mb-1">
              🎯 Key Innovation: Dual Coding System
            </h3>
            <div className="flex gap-3 text-xs mb-2">
              <div className="bg-white rounded px-2 py-1">
                <span className="font-semibold text-green-700">NAMASTE:</span> AYU-DIG-015
              </div>
              <div className="bg-white rounded px-2 py-1">
                <span className="font-semibold text-blue-700">ICD-11:</span> SM11
              </div>
            </div>
            <p className="text-xs text-gray-700">
              ONE record with BOTH codes - satisfying traditional practitioners AND modern EMR requirements.
            </p>
          </div>
          <div className="flex gap-3 text-center">
            <div className="bg-white rounded px-2 py-1">
              <p className="text-lg font-bold text-ayush-primary">100%</p>
              <p className="text-xs text-gray-600">ABDM</p>
            </div>
            <div className="bg-white rounded px-2 py-1">
              <p className="text-lg font-bold text-icd-primary">FHIR</p>
              <p className="text-xs text-gray-600">R4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactShowcase;
