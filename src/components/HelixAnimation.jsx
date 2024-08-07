import React, { useEffect, useRef } from 'react';

const HelixAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const numCircles = 30;
    const maxRadius = Math.min(width, height) / 2 - 20;

    const createCircles = (t) => {
      const circles = [];

      for (let i = 0; i < numCircles; i++) {
        const angle = (i / numCircles) * Math.PI * 2 * 3; // 3 rotations
        const distance = (i / numCircles) * maxRadius * t;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        const radius = 2 + (distance / maxRadius) * 8; // Circles grow as they move outward

        circles.push({ x, y, radius });
      }

      return circles;
    };

    const animate = (t) => {
      if (t > 1) return;

      const circles = createCircles(t);
      const circleElements = svg.querySelectorAll('circle');

      circles.forEach((circle, index) => {
        circleElements[index].setAttribute('cx', circle.x);
        circleElements[index].setAttribute('cy', circle.y);
        circleElements[index].setAttribute('r', circle.radius);
      });

      requestAnimationFrame(() => animate(t + 0.01));
    };

    // Create initial circles
    const initialCircles = createCircles(0);
    initialCircles.forEach(circle => {
      const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circleElement.setAttribute('fill', 'white');
      svg.appendChild(circleElement);
    });

    animate(0);
  }, []);

  return (
    <svg ref={svgRef} width="400" height="400" className="mx-auto">
    </svg>
  );
};

export default HelixAnimation;
