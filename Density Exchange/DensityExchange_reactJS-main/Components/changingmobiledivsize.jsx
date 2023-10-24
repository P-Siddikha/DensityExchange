import { Box, Image } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';
// import './ResizableDiv.css'; // You can define your CSS styles in this file

const ResizableDiv = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const resizableDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.5 } // Change this threshold value as needed
    );

    if (resizableDivRef.current) {
      observer.observe(resizableDivRef.current);
    }

    return () => {
      if (resizableDivRef.current) {
        observer.unobserve(resizableDivRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInViewport) {
      setIsExpanded(true);
      const timeoutId = setTimeout(() => {
        setIsExpanded(false);
      }, 1000); // Adjust the timeout value as needed

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInViewport]);

  return (
    <Box mt={"-97%"} zIndex={10} className={`container ${isExpanded ? 'expanded' : ''}`}>
      <Box zIndex={10} className="resizable-div" ref={resizableDivRef}>
        {/* Your content here */}
        <Image w={"50%"} h={"100%"} borderRadius={"15px"} src='/images/mobileimg.png' alt='err' />
      </Box>
    </Box>
  );
};

export default ResizableDiv;
