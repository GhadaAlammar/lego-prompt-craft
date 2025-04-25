
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
            <LegoBlock type="primary" label="Context" options={[
              "From a lecture",
              "From the textbook",
              "From research papers",
              "From case studies",
              "From real-world examples"
            ]} />
            <LegoBlock type="secondary" label="Instruction" options={[
              "Explain in detail",
              "Summarize briefly",
              "Compare and contrast",
              "Analyze critically",
              "Provide examples"
            ]} />
            <LegoBlock type="system" label="Tone" options={[
              "Professional",
              "Casual",
              "Academic",
              "Conversational",
              "Technical"
            ]} />
            <LegoBlock type="context" label="Output Format" options={[
              "Bullet points",
              "Paragraph form",
              "Step-by-step guide",
              "Table format",
              "Diagram description"
            ]} />
            <LegoBlock type="primary" label="Constraints" options={[
              "Under 100 words",
              "Focus on basics",
              "Include citations",
              "No jargon",
              "Time limit: 5 min"
            ]} />
            <LegoBlock type="secondary" label="Add-ons" options={[
              "Include examples",
              "Add diagrams",
              "Provide analogies",
              "Include resources",
              "Add practice questions"
            ]} />
            <LegoBlock type="system" label="Wildcard" options={[
              "Make it fun",
              "Challenge assumptions",
              "Add plot twist",
              "Include humor",
              "Surprise element"
            ]} />
          </div>
        </div>

        {/* Construction area */}
        <ConstructionArea />
      </div>
    </div>
  );
};

export default Index;
