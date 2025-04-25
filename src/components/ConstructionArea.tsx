
import React, { useState, useEffect } from 'react';

interface BlockSelection {
  label: string;
  selectedOption: string;
}

const ConstructionArea: React.FC = () => {
  const [selections, setSelections] = useState<BlockSelection[]>([]);

  useEffect(() => {
    const handleBlockSelection = (event: Event) => {
      const { detail } = event as CustomEvent;
      setSelections(prev => {
        // Find if we already have a selection for this block type
        const existingIndex = prev.findIndex(s => s.label === detail.label);
        if (existingIndex >= 0) {
          // Replace the existing selection
          const newSelections = [...prev];
          newSelections[existingIndex] = {
            label: detail.label,
            selectedOption: detail.selectedOption,
          };
          return newSelections;
        }
        // Add new selection
        return [...prev, {
          label: detail.label,
          selectedOption: detail.selectedOption,
        }];
      });
    };

    window.addEventListener('blockOptionSelected', handleBlockSelection);
    return () => window.removeEventListener('blockOptionSelected', handleBlockSelection);
  }, []);

  return (
    <div className="min-h-[200px] w-full bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
      {selections.length === 0 ? (
        <div className="text-gray-400 text-center">
          Click on blocks above to build your prompt
        </div>
      ) : (
        <div className="prose max-w-none">
          {selections.map((selection, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{selection.label}:</span>{' '}
              <span>{selection.selectedOption}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConstructionArea;
