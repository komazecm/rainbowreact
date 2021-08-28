import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './Main.css';

function Main() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards} /> //ova komponenta sad sadrzi ovaj dole niz pitanja
  );
}

const SAMPLE_FLASHCARDS = [ 
  {
    id: 1,
    question: 'Which is a synonym of render?',
    answer: 'deliver',
    options: [
      'list',
      'label',
      'measure',
      'deliver'
    ]
  },
  {
    id: 2,
    question: 'Which is a synonym of ludicrous?',
    answer: 'laughable',
    options: [
      'believable',
      'laughable',
      'shameful',
      'insulting'
    ]
  },
  {
    id: 3,
    question: 'Which is a synonym of redact??',
    answer: 'edit',
    options: [
      'expect',
      'release',
      'edit',
      'reply'
    ]
  },
  {
    id: 4,
    question: 'Which is a synonym of sanguineous?',
    answer: 'bloody',
    options: [
      'noteworthy',
      'frantic',
      'difficult',
      'bloody'
    ]
  },
  {
    id: 5,
    question: 'Which is a synonym of recidivism?',
    answer: 'relapse',
    options: [
      'sadness',
      'instability',
      'relapse',
      'uncertainty'
    ]
  },
  {
    id: 6,
    question: 'Which is a synonym of leverage?',
    answer: 'power',
    options: [
      'power',
      'cooperation',
      'feedback',
      'flexibility'
    ]
  },
  {
    id: 7,
    question: 'Which is a synonym of instructor?',
    answer: 'teacher',
    options: [
      'builder',
      'nurse',
      'teacher',
      'farmer'
    ]
  },
  {
    id: 8,
    question: 'Which is a synonym of prudence?',
    answer: 'wisdom',
    options: [
      'wisdom',
      'charity',
      'talent',
      'confusion'
    ]
  },
  {
    id: 9,
    question: 'Which is a synonym of legacy?',
    answer: 'inheritance',
    options: [
      'imagination',
      'inheritance',
      'desire',
      'goodwill'
    ]
  },
  {
    id: 10,
    question: 'Which is a synonym of pungent?',
    answer: 'sharp',
    options: [
      'familiar',
      'sharp',
      'fair',
      'distinct'
    ]
  },
  {
    id: 11,
    question: 'Which is a synonym of repast?',
    answer: 'meal',
    options: [
      'clothing',
      'harm',
      'meal',
      'hesitation'
    ]
  },
  {
    id: 12,
    question: 'Which is a synonym of potential?',
    answer: 'possibilities',
    options: [
      'standards',
      'model',
      'patterns',
      'possibilities'
    ]
  }
]

export default Main;
