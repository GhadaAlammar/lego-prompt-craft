
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface BlockSelection {
  label: string;
  selectedOption: string;
}

const ConstructionArea: React.FC = () => {
  const [selections, setSelections] = useState<BlockSelection[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");

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

  const generatePrompt = () => {
    const promptParts = selections.map(selection => {
      switch (selection.label) {
        case 'Context':
          return `Using ${selection.selectedOption.toLowerCase()}`;
        case 'Instruction':
          return `please ${selection.selectedOption.toLowerCase()}`;
        case 'Tone':
          return `in a ${selection.selectedOption.toLowerCase()} tone`;
        case 'Output Format':
          return `presented as ${selection.selectedOption.toLowerCase()}`;
        case 'Constraints':
          return `with the constraint: ${selection.selectedOption.toLowerCase()}`;
        case 'Add-ons':
          return `also ${selection.selectedOption.toLowerCase()}`;
        case 'Wildcard':
          return `and ${selection.selectedOption.toLowerCase()}`;
        default:
          return selection.selectedOption;
      }
    });

    setGeneratedPrompt(promptParts.join(', '));
  };

  return (
    <div className="space-y-6">
      <div className="min-h-[200px] w-full bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
        {selections.length === 0 ? (
          <div className="text-gray-400 text-center">
            Click on blocks above to build your prompt
          </div>
        ) : (
          <div className="prose max-w-none">
            {selections.map((selection, index) => (
              <div key={index} className="mb-2">
                <span>{selection.selectedOption}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {selections.length > 0 && (
        <div className="flex flex-col gap-4">
          <Button 
            onClick={generatePrompt}
            className="w-full bg-lego-primary hover:bg-lego-primary/90"
          >
            Generate Prompt
          </Button>
          
          {generatedPrompt && (
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow">
              <h3 className="text-lg font-semibold mb-2">Generated Prompt:</h3>
              <p className="text-gray-700">{generatedPrompt}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConstructionArea;
