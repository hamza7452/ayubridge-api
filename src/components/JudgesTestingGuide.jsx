import { Wand2, User, ArrowRight, CheckCircle } from 'lucide-react';

const JudgesTestingGuide = () => (
  <div className="card bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 py-3 mb-6">
    <div className="flex items-start space-x-2 mb-3">
      <Wand2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <div>
        <h2 className="text-base font-heading font-bold text-gray-800">
          How to Test the Prototype
        </h2>
        <p className="text-gray-600 text-xs">
          Step-by-step walkthrough for exploring all key features of AyuBridge API Demo.
        </p>
      </div>
    </div>
    <ol className="list-decimal list-inside space-y-2 text-gray-800 text-sm">
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <User className="w-4 h-4 text-green-700" />
          <span><strong>ABHA Authentication</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Enter any 14-digit number (e.g., 12345678901234) and click "Authenticate"</li>
          <li>Should show green success box; try wrong length – should show error</li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <ArrowRight className="w-4 h-4 text-orange-600" />
          <span><strong>AYUSH Term Mapping</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Type or click any sample term (like "Triphala Churna", "Amlapitta")</li>
          <li>Click "Map to ICD-11" and wait for result card</li>
          <li>Check: Term, NAMASTE code, ICD-11 code, confidence score</li>
          <li>Try random/unknown term, see fallback mapping (SM99)</li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="w-4 h-4 text-green-700" />
          <span><strong>Mapping Results & Copy Function</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Check full result card, EMR preview, patient ID</li>
          <li>Click "Copy" button for ICD code; verify "Copied!" feedback</li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="w-4 h-4 text-purple-700" />
          <span><strong>FHIR R4 Bundle</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Scroll to the black FHIR bundle card</li>
          <li>Click "Copy JSON"; paste in any editor to verify actual FHIR data</li>
          <li>Check both codes present (NAMASTE + ICD-11)</li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="w-4 h-4 text-cyan-700" />
          <span><strong>Analytics Dashboard</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Review top 5 mapped terms, stats, confidence levels</li>
          <li>Check visual styles, hover effects</li>
        </ul>
      </li>
      <li>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="w-4 h-4 text-pink-700" />
          <span><strong>Responsive Design</strong></span>
        </div>
        <ul className="list-disc list-inside ml-6 text-xs text-gray-700 space-y-0.5">
          <li>Open DevTools and switch to mobile view</li>
          <li>Test all steps above again on mobile/tablet</li>
        </ul>
      </li>
    </ol>
    <div className="mt-3">
      <p className="text-xs text-gray-600 bg-white rounded p-2">
        <strong>All features are interactive:</strong> Please test authentication, input various terms, generate FHIR bundle, review analytics, and evaluate across devices.
      </p>
    </div>
  </div>
);

export default JudgesTestingGuide;
