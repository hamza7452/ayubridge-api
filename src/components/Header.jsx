import { Activity, Code, Database } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-ayush-primary to-ayush-secondary text-white shadow-xl">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-lg">
              <Activity className="w-8 h-8 text-ayush-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">AyuBridge API</h1>
              <p className="text-ayush-light text-sm">NAMASTE ↔ ICD-11 TM2 Integration Demo</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">FHIR R4 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <Database className="w-5 h-5" />
              <span className="text-sm font-medium">ABDM Ready</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="badge bg-white/20 text-white">Problem Statement: 25024</span>
          <span className="badge bg-white/20 text-white">MedTech/HealthTech</span>
          <span className="badge bg-white/20 text-white">EHR Integration</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
