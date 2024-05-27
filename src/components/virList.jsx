import React, { useState, useRef, useEffect } from 'react';

const virList = ({items, itemH, disItems}) => {
    const [startI, setStartI] = useState(0);
    const listRef = useRef(null);

    const calculateVisItems = () => {
        const scrollTop = listRef.current.scrollTop;
        const newStartI = Math.floor(scrollTop / itemH);
        setStartI(newStartI);
    };

    useEffect(() => {
        calculateVisItems();
        listRef.current.addEventListener('scroll', calculateVisItems);
        return () => {
            if (listRef.current) {
                listRef.current.removeEventListener('scroll', calculateVisItems);
            }
        };
    }, [itemH]);

  return (
    <div ref={listRef} style={{ overflowY: 'scroll', height: `${disItems * itemH}px`, border: '1px solid #ffffff',}} >
      <div style={{ position: 'relative', height: `${items.length * itemH}px`, }} >
        {items.slice(startI, startI + disItems).map((item, index) => (
          <div key={index} style={{ position: 'absolute', top: `${(startI + index) * itemH}px`, width: '100%', height: `${itemH}px`, lineHeight: `${itemH}px`, }}  >
            {item}
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default virList;