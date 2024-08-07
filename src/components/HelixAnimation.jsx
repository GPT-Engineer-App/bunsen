import React, { useEffect, useRef } from 'react';

const HelixAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;

    const createHelix = (t) => {
      const points = [];
      const numPoints = 100;
      const maxRadius = Math.min(width, height) / 2 - 20;

      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2 * 3; // 3 rotations
        const radius = (i / numPoints) * maxRadius * t;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        points.push(`${x},${y}`);
      }

      return points.join(' ');
    };

    const animate = (t) => {
      if (t > 1) return;

      const points = createHelix(t);
      const path = svg.querySelector('path');
      path.setAttribute('d', `M ${points}`);

      requestAnimationFrame(() => animate(t + 0.01));
    };

    animate(0);
  }, []);

  return (
    <svg ref={svgRef} width="400" height="400" className="mx-auto">
      <path fill="none" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default HelixAnimation;
