
import React from 'react';
import { Blocks } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface LegoBlockProps {
  type: 'primary' | 'secondary' | 'system' | 'context';
  label: string;
  options: string[];
}

const LegoBlock: React.FC<LegoBlockProps> = ({ type, label, options }) => {
  const colorMap = {
    primary: 'bg-lego-primary',
    secondary: 'bg-lego-secondary',
    system: 'bg-lego-system',
    context: 'bg-lego-context',
  };

  const handleSelect = (option: string) => {
    const blockData = { type, label, selectedOption: option };
    const event = new CustomEvent('blockOptionSelected', { 
      detail: blockData
    });
    window.dispatchEvent(event);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`${colorMap[type]} relative w-32 h-16 rounded-md cursor-pointer 
                    transition-transform hover:scale-105 active:scale-95
                    shadow-lg flex items-center justify-center group`}
        >
          {/* Lego studs */}
          <div className="absolute -top-2 left-0 w-full flex justify-around">
            <div className="w-4 h-4 bg-current rounded-full opacity-80"></div>
            <div className="w-4 h-4 bg-current rounded-full opacity-80"></div>
          </div>
          
          {/* Block content */}
          <div className="flex items-center gap-2 text-white font-medium">
            <Blocks className="w-5 h-5" />
            <span>{label}</span>
          </div>
          
          {/* Connection point */}
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-black/10 rounded"></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleSelect(option)}
            className="cursor-pointer"
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LegoBlock;
