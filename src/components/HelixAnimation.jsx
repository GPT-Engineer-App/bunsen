import React, { useEffect, useRef } from 'react';

const HelixAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const numCircles = 20;
    const maxRadius = Math.min(width, height) / 2 - 20;

    const createCircles = (t, phase = 0) => {
      const circles = [];

      for (let i = 0; i < numCircles; i++) {
        const angle = (i / numCircles) * Math.PI * 2 * 1.5 + phase; // 1.5 rotations
        const distance = maxRadius * Math.min(t, 1); // All circles move outward together
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        const radius = 10 + (distance / maxRadius) * 30; // Even larger circles

        circles.push({ x, y, radius });
      }

      return circles;
    };

    const animate = (t) => {
      const phase = (t * 0.2) % (Math.PI * 2); // Slow continuous rotation
      const circles = createCircles(t, phase);
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
      circleElement.setAttribute('stroke', 'white');
      circleElement.setAttribute('fill', 'none');
      circleElement.setAttribute('stroke-width', '1');
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
