import { useState } from 'react';
import Header from './components/Header';
import ABHAAuth from './components/ABHAAuth';
import TermInput from './components/TermInput';
import ResultDisplay from './components/ResultDisplay';
import Analytics from './components/Analytics';
import ImpactShowcase from './components/ImpactShowcase';
import JudgesTestingGuide from './components/JudgesTestingGuide';

const mockMappings = {
  'triphala churna': {
    input_term: 'Triphala Churna',
    mapped_icd11: 'SM20 - Digestive system disorders',
    namaste_code: 'AYU-DIG-102',
    confidence: '92%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM20', source: 'AyuBridge API' }
  },
  'amlapitta': {
    input_term: 'Amlapitta',
    mapped_icd11: 'SM11 - Gastro-oesophageal reflux disease',
    namaste_code: 'AYU-DIG-015',
    confidence: '88%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM11', source: 'AyuBridge API' }
  },
  'kaphaja kasa': {
    input_term: 'Kaphaja Kasa',
    mapped_icd11: 'SM45 - Respiratory system disorders',
    namaste_code: 'AYU-RES-028',
    confidence: '90%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM45', source: 'AyuBridge API' }
  },
  'raktapitta': {
    input_term: 'Raktapitta',
    mapped_icd11: 'SM28 - Blood and bleeding disorders',
    namaste_code: 'AYU-HEM-041',
    confidence: '85%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM28', source: 'AyuBridge API' }
  },
  'jwara': {
    input_term: 'Jwara',
    mapped_icd11: 'SM62 - Fever of unknown origin',
    namaste_code: 'AYU-GEN-007',
    confidence: '93%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM62', source: 'AyuBridge API' }
  },
  'pandu roga': {
    input_term: 'Pandu Roga',
    mapped_icd11: 'SM34 - Anemia and related disorders',
    namaste_code: 'AYU-HEM-019',
    confidence: '89%',
    integration_sample: { patient_id: 'ABHA123456', diagnosis: 'SM34', source: 'AyuBridge API' }
  }
};

function App() {
  const [abhaNumber, setAbhaNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = (abha) => setAbhaNumber(abha);

  const handleSearch = async (term) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const normalizedTerm = term.toLowerCase().trim();
    const result = mockMappings[normalizedTerm] || {
      input_term: term,
      mapped_icd11: 'SM99 - Traditional medicine disorder, unspecified',
      namaste_code: 'AYU-GEN-999',
      confidence: '65%',
      integration_sample: { patient_id: abhaNumber || 'ABHA123456', diagnosis: 'SM99', source: 'AyuBridge API' }
    };
    
    setSearchResult({
      ...result,
      integration_sample: { ...result.integration_sample, patient_id: abhaNumber || 'ABHA123456' }
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Impact Showcase Section */}
        <div className="mb-8">
          <ImpactShowcase />
        </div>

        {/* Judges Testing Guide - NEW */}
        <JudgesTestingGuide />

        {/* Divider */}
        <div className="my-8 border-t-2 border-gray-200"></div>

        {/* Interactive Demo Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-2">
            🚀 Try the Demo
          </h2>
          <p className="text-gray-600 text-sm">
            Test the AyuBridge API with sample AYUSH terms and see real-time mapping
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <ABHAAuth onAuthSuccess={handleAuth} />
            <Analytics />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <TermInput onSearch={handleSearch} isLoading={isLoading} />
            {searchResult && <ResultDisplay result={searchResult} abhaNumber={abhaNumber || 'ABHA123456'} />}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          <p>AyuBridge API Demo Portal | Problem Statement ID: 25026 | MedTech/HealthTech Category</p>
          <p className="mt-1">NAMASTE-ICD-11 TM2 Integration with ABDM/FHIR R4 Compliance</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
