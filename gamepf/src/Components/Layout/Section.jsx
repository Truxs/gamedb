import React, { useState, useRef, useEffect } from "react";
import "./Section.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Section({ title, children, paginate, windowSize = 4, className = "" }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  const containerRef = useRef(null);
  
  const childrenArray = React.Children.toArray(children);
  const pageCount = paginate ? Math.ceil(childrenArray.length / windowSize) : 1;
  
  const handlePrevPage = () => {
    if (currentPage > 0 && !animating) {
      setSlideDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
      }, 300);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < pageCount - 1 && !animating) {
      setSlideDirection('left');
      setAnimating(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
      }, 300);
    }
  };
  
  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
        setSlideDirection(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [animating]);
  
  const displayedChildren = paginate
    ? childrenArray.slice(currentPage * windowSize, (currentPage + 1) * windowSize)
    : childrenArray;
  
  return (
    <div className={`section ${className}`}>
      <div className="section-header">
        <h2>{title}</h2>
        {paginate && pageCount > 1 && (
          <div className="pagination-controls">
            <button 
              onClick={handlePrevPage} 
              disabled={currentPage === 0}
              className="pagination-button"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === pageCount - 1}
              className="pagination-button"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
      <div 
        ref={containerRef} 
        className={`card-container ${animating ? 'animating' : ''} ${slideDirection ? `slide-${slideDirection}` : ''}`}
      >
        {displayedChildren}
      </div>
    </div>
  );
}

export default Section;
