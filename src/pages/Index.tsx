
import React from 'react';
import LegoBlock from '../components/LegoBlock';
import ConstructionArea from '../components/ConstructionArea';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Lego Prompt Builder
        </h1>
        
        {/* Blocks palette */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Available Blocks</h2>
          <div className="flex flex-wrap gap-4">
            <LegoBlock type="primary" label="Context" />
            <LegoBlock type="secondary" label="Instruction" />
            <LegoBlock type="system" label="Examples" />
            <LegoBlock type="context" label="Output" />
          </div>
        </div>

        {/* Construction area */}
        <ConstructionArea />
      </div>
    </div>
  );
};

export default Index;
