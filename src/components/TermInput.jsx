import { useState } from 'react';
import { Search, Loader } from 'lucide-react';

const TermInput = ({ onSearch, isLoading }) => {
  const [term, setTerm] = useState('');
  
  const sampleTerms = [
    'Triphala Churna',
    'Amlapitta',
    'Kaphaja Kasa',
    'Raktapitta',
    'Jwara',
    'Pandu Roga'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term);
    }
  };

  const handleSampleClick = (sampleTerm) => {
    setTerm(sampleTerm);
    onSearch(sampleTerm);
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <Search className="w-6 h-6 text-ayush-primary" />
        <h2 className="text-xl font-heading font-semibold text-gray-800">
          AYUSH Term Mapping
        </h2>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Enter an AYUSH/NAMASTE diagnosis term to map to ICD-11 TM2 code
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AYUSH Diagnosis Term
          </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="e.g., Triphala Churna, Amlapitta, Jwara"
            className="input-field"
            disabled={isLoading}
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full flex items-center justify-center space-x-2"
          disabled={isLoading || !term.trim()}
        >
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Mapping...</span>
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              <span>Map to ICD-11</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">Try sample terms:</p>
        <div className="flex flex-wrap gap-2">
          {sampleTerms.map((sample) => (
            <button
              key={sample}
              onClick={() => handleSampleClick(sample)}
              className="px-3 py-1 bg-ayush-light text-ayush-dark rounded-full text-sm font-medium hover:bg-ayush-primary hover:text-white transition-all"
              disabled={isLoading}
            >
              {sample}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermInput;
