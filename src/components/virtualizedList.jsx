import React, { useState, useRef, useEffect } from 'react';

const VirtualizedList = ({ data, itemHeight, visibleItemCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => {
      if (listRef.current) {
        const scrollTop = listRef.current.scrollTop;
        const newStartIndex = Math.floor(scrollTop / itemHeight);
        setStartIndex(newStartIndex);
      }
    };

    listRef.current.addEventListener('scroll', updateScroll);
    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener('scroll', updateScroll);
      }
    };
  }, [itemHeight]);

  return (
    <div ref={listRef} style={{ overflowY: 'scroll', height: `${visibleItemCount * itemHeight}px`, border: '1px solid #1e90ff',}} >
      <div style={{ position: 'relative', height: `${data.length * itemHeight}px`, }} >
        {data.slice(startIndex, startIndex + visibleItemCount).map((item, index) => (
          <div key={index} style={{ position: 'absolute', top: `${(startIndex + index) * itemHeight}px`, width: '100%', height: `${itemHeight}px`, lineHeight: `${itemHeight}px`, }}  >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
