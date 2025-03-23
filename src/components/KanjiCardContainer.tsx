'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaRandom } from 'react-icons/fa';
import KanjiCard from './KanjiCard';
import { KanjiData } from '@/data/kanjiData';

interface KanjiCardContainerProps {
  kanjiList: KanjiData[];
}

export default function KanjiCardContainer({ kanjiList }: KanjiCardContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Get current kanji
  const currentKanji = kanjiList[currentIndex];

  // Go to previous kanji
  const prevKanji = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? kanjiList.length - 1 : prevIndex - 1
    );
  };

  // Go to next kanji
  const nextKanji = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === kanjiList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to random kanji
  const randomKanji = () => {
    const randomIndex = Math.floor(Math.random() * kanjiList.length);
    setDirection(randomIndex > currentIndex ? 1 : -1);
    setCurrentIndex(randomIndex);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Kanji Card {currentIndex + 1} of {kanjiList.length}
          </h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {currentKanji.level}
          </span>
        </div>
          
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="flex justify-center"
          >
            <KanjiCard kanji={currentKanji} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center space-x-6 mt-6">
        <button
          onClick={prevKanji}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Previous kanji"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>
        
        <button
          onClick={randomKanji}
          className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
          aria-label="Random kanji"
        >
          <FaRandom className="text-purple-700" />
        </button>
        
        <button
          onClick={nextKanji}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Next kanji"
        >
          <FaArrowRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
} 