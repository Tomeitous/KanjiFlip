'use client';

import { useState } from 'react';
import KanjiCardContainer from '@/components/KanjiCardContainer';
import { kanjiList, KanjiData } from '@/data/kanjiData';
import { FaFilter } from 'react-icons/fa';

export default function LearnPage() {
  const [filteredLevel, setFilteredLevel] = useState<string>('all');
  
  const levels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'];
  
  const filteredKanjiList = filteredLevel === 'all' 
    ? kanjiList 
    : kanjiList.filter(kanji => kanji.level === filteredLevel);

  return (
    <div className="bg-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Kanji Flip</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn Japanese kanji with interactive flip cards. Click a card to reveal readings and examples.
        </p>
      </header>

      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
          <FaFilter className="ml-2 text-gray-500" />
          
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setFilteredLevel(level)}
              className={`px-4 py-2 mx-1 rounded-md ${
                filteredLevel === level
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>
      </div>

      {filteredKanjiList.length > 0 ? (
        <KanjiCardContainer kanjiList={filteredKanjiList} />
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">No kanji found for the selected level.</p>
        </div>
      )}
    </div>
  );
} 