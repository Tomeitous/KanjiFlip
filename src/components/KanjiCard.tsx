'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { KanjiData } from '@/data/kanjiData';

interface KanjiCardProps {
  kanji: KanjiData;
}

export default function KanjiCard({ kanji }: KanjiCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-64 h-80 cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <motion.div
        className="w-full h-full relative preserve-3d duration-500"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-lg p-6 flex flex-col items-center justify-center">
          <span className="text-9xl mb-4">{kanji.character}</span>
          <h2 className="text-xl font-bold text-gray-900">{kanji.meaning}</h2>
          <span className="mt-2 text-sm text-gray-500">Click to flip</span>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-lg bg-white shadow-lg p-6 [transform:rotateY(180deg)] flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-2">Readings</h3>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-800">On: {kanji.onReading.join(', ')}</p>
            <p className="text-sm font-medium text-gray-800">Kun: {kanji.kunReading.join(', ')}</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-2">Example</h3>
          <div className="flex-grow">
            <p className="text-md font-medium text-gray-800">{kanji.example.japanese}</p>
            <p className="text-sm text-gray-600 italic">{kanji.example.meaning}</p>
          </div>
          
          <div className="mt-auto">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{kanji.level}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 