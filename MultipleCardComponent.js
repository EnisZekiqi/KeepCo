import React, { useState } from 'react';

const MultipleCardComponent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { id: 1, content: 'Card 1 content' },
    { id: 2, content: 'Card 2 content' },
    { id: 3, content: 'Card 3 content' },
    // Add more cards as needed
  ];

  const handleClick = (cardId) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            position: 'absolute',
            top: `${20 * card.id}px`, // Adjust the positioning as needed
            zIndex: card.id === activeCard ? 1 : 0,
            transition: 'top 0.5s ease-in-out',
          }}
        >
          <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff', width: '200px' }}>
            <p>{card.content}</p>
            <button onClick={() => handleClick(card.id)}>Toggle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleCardComponent;
