import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }){ //ovo flashcards je kao precica da se ne mora pisati props.falshcards
    return (
        <div className="container">
            <div className="card-text">
                <p>Proverite svoj vokabular uz kartice ispod!</p>
            </div>
            <div className="card-grid">
                {flashcards.map(flashcard => { 
                    return <Flashcard flashcard={flashcard} key={flashcard.id} /> //key je kao primarni kljuc
                })}
            </div>
        </div>
    )
}

