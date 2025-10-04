import { useState } from 'react';
import { Shield, Check, AlertCircle } from 'lucide-react';

const ABHAAuth = ({ onAuthSuccess }) => {
  const [abhaNumber, setAbhaNumber] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    setError('');
    
    const abhaPattern = /^\d{14}$/;
    
    if (!abhaNumber) {
      setError('Please enter ABHA number');
      return;
    }
    
    if (!abhaPattern.test(abhaNumber)) {
      setError('Invalid ABHA format. Must be 14 digits.');
      return;
    }
    
    setIsAuthenticated(true);
    if (onAuthSuccess) {
      onAuthSuccess(abhaNumber);
    }
  };

  const handleReset = () => {
    setAbhaNumber('');
    setIsAuthenticated(false);
    setError('');
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <Shield className="w-6 h-6 text-ayush-primary" />
        <h2 className="text-xl font-heading font-semibold text-gray-800">
          ABHA Authentication
        </h2>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        Enter ABHA (Ayushman Bharat Health Account) number for mock authentication
      </p>

      {!isAuthenticated ? (
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ABHA Number (14 digits)
            </label>
            <input
              type="text"
              value={abhaNumber}
              onChange={(e) => setAbhaNumber(e.target.value.replace(/\D/g, '').slice(0, 14))}
              placeholder="12345678901234"
              className="input-field"
              maxLength="14"
            />
            {error && (
              <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>
          
          <button type="submit" className="btn-primary w-full">
            Authenticate
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 rounded-full p-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-green-800">Authenticated Successfully</p>
                <p className="text-sm text-green-600">ABHA: {abhaNumber}</p>
              </div>
            </div>
          </div>
          
          <button onClick={handleReset} className="btn-secondary w-full">
            Change ABHA Number
          </button>
        </div>
      )}
    </div>
  );
};

export default ABHAAuth;
