import { CheckCircle, Code2, FileJson, Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const ResultDisplay = ({ result, abhaNumber }) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!result) return null;

  const copyToClipboard = (text, type) => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
      document.execCommand('copy');
      
      // Show success feedback
      if (type === 'text') {
        setCopiedText(true);
        setTimeout(() => setCopiedText(false), 2000);
      } else {
        setCopiedJson(true);
        setTimeout(() => setCopiedJson(false), 2000);
      }
    } catch (err) {
      console.error('Copy failed:', err);
      alert('Copy failed. Please select and copy manually.');
    }
    
    // Clean up
    document.body.removeChild(textarea);
  };

  const fhirBundle = {
    resourceType: "Bundle",
    type: "document",
    entry: [
      {
        resource: {
          resourceType: "Condition",
          id: "ayush-condition-001",
          code: {
            coding: [
              {
                system: "http://id.who.int/icd11/mms",
                code: result.mapped_icd11.split(' - ')[0],
                display: result.mapped_icd11
              },
              {
                system: "https://namaste.ayush.gov.in",
                code: result.namaste_code,
                display: result.input_term
              }
            ]
          },
          subject: {
            reference: `Patient/${abhaNumber}`,
            identifier: {
              system: "https://healthid.ndhm.gov.in",
              value: abhaNumber
            }
          },
          recordedDate: new Date().toISOString().split('T')[0],
          meta: {
            source: "AyuBridge API",
            versionId: "1"
          }
        }
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Mapping Result Card */}
      <div className="card bg-gradient-to-br from-green-50 to-blue-50">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle className="w-7 h-7 text-green-600" />
          <h2 className="text-2xl font-heading font-bold text-gray-800">
            Mapping Successful
          </h2>
        </div>

        <div className="space-y-4">
          {/* Input Term */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-ayush-primary">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Input AYUSH Term</p>
            <p className="text-lg font-semibold text-gray-800">{result.input_term}</p>
            <span className="badge badge-success mt-2">{result.namaste_code}</span>
          </div>

          {/* Mapped ICD-11 */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-icd-primary">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Mapped ICD-11 TM2</p>
            <p className="text-lg font-semibold text-gray-800">{result.mapped_icd11}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="badge badge-info">Confidence: {result.confidence}</span>
              <button 
                onClick={() => copyToClipboard(result.mapped_icd11, 'text')}
                className="flex items-center space-x-1 px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition-colors text-sm font-medium"
                title="Copy ICD-11 code"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Integration Sample */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-purple-600" />
                <p className="text-sm font-semibold text-gray-700">EMR Integration Preview</p>
              </div>
              <span className="badge bg-purple-100 text-purple-800">ABDM Compliant</span>
            </div>
            
            <div className="bg-gray-50 rounded p-3 text-sm font-mono space-y-1">
              <div><span className="text-gray-500">Patient ID:</span> <span className="text-gray-800">{result.integration_sample.patient_id}</span></div>
              <div><span className="text-gray-500">Diagnosis:</span> <span className="text-gray-800">{result.integration_sample.diagnosis}</span></div>
              <div><span className="text-gray-500">Source:</span> <span className="text-gray-800">{result.integration_sample.source}</span></div>
              <div><span className="text-gray-500">Standard:</span> <span className="text-gray-800">ICD-11 TM2 + NAMASTE</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* FHIR Bundle Card */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <FileJson className="w-6 h-6 text-icd-primary" />
            <h3 className="text-xl font-heading font-semibold text-gray-800">
              FHIR R4 Bundle
            </h3>
          </div>
          <button
            onClick={() => copyToClipboard(JSON.stringify(fhirBundle, null, 2), 'json')}
            className="flex items-center space-x-2 px-4 py-2 bg-icd-light text-icd-secondary rounded-lg hover:bg-icd-primary hover:text-white transition-all font-medium"
          >
            {copiedJson ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-sm">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-sm">Copy JSON</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-xs font-mono">
            {JSON.stringify(fhirBundle, null, 2)}
          </pre>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
          <p className="text-gray-600">
            FHIR R4 compliant resource ready for ABDM integration
          </p>
          <a 
            href="https://www.hl7.org/fhir/R4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-icd-primary hover:text-icd-secondary font-medium"
          >
            <span>Learn more</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
