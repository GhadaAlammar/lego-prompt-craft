
import React, { useState } from 'react';

interface BlockData {
  type: 'primary' | 'secondary' | 'system' | 'context';
  label: string;
}

const ConstructionArea: React.FC = () => {
  const [placedBlocks, setPlacedBlocks] = useState<BlockData[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const blockData = JSON.parse(e.dataTransfer.getData('text/plain'));
    setPlacedBlocks((prev) => [...prev, blockData]);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="min-h-[400px] w-full bg-lego-background rounded-lg p-4 border-2 border-dashed border-gray-300
                flex flex-col items-center gap-2"
    >
      {placedBlocks.map((block, index) => (
        <div
          key={index}
          className={`bg-lego-${block.type} w-32 h-16 rounded-md shadow-lg 
                     flex items-center justify-center text-white font-medium
                     animate-block-snap`}
        >
          {block.label}
        </div>
      ))}
      {placedBlocks.length === 0 && (
        <div className="text-gray-400 mt-20">
          Drag and drop blocks here to build your prompt
        </div>
      )}
    </div>
  );
};

export default ConstructionArea;
