import React, { useState, useEffect } from 'react';

const TypeWriter = ({ texts, typingSpeed = 200, deletingSpeed = 100, delayBetweenTexts = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0); // Track the index of the current character being typed/deleted

  useEffect(() => {
    const handleTypingAndDeleting = () => {
      if (isDeleting) {
        // Deleting the text one character at a time
        setDisplayedText((prevText) => prevText.slice(0, prevText.length - 1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else {
        // Typing the text one character at a time
        setDisplayedText((prevText) => prevText + texts[currentIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }
    };

    let timer;
    if (isDeleting) {
      // If deleting, we delete the text with the deleting speed
      if (displayedText.length === 0) {
        // Move to next text once fully deleted
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timer = setTimeout(handleTypingAndDeleting, delayBetweenTexts);
      } else {
        timer = setTimeout(handleTypingAndDeleting, deletingSpeed);
      }
    } else {
      // If typing, we type the text with the typing speed
      if (charIndex === texts[currentIndex].length) {
        // Once the full text is typed, start deleting after the delay
        setIsDeleting(true);
        timer = setTimeout(handleTypingAndDeleting, delayBetweenTexts);
      } else {
        timer = setTimeout(handleTypingAndDeleting, typingSpeed);
      }
    }

    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, [displayedText, charIndex, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return <div>{displayedText}</div>;
};

export default TypeWriter;
