import React, { useEffect, useRef } from 'react';

const HelixAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const numCircles = 40;
    const maxRadius = Math.min(width, height) * 0.5; // 50% of the smaller dimension

    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    // Create gradient
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'rainbowGradient';
    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '100%');

    const colors = ['#0000FF', '#FF1493', '#FFA500', '#FF4500'];
    colors.forEach((color, index) => {
      const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop.setAttribute('offset', `${(index / (colors.length - 1)) * 100}%`);
      stop.setAttribute('stop-color', color);
      gradient.appendChild(stop);
    });

    svg.appendChild(gradient);

    const createCircles = (t, phase = 0) => {
      const circles = [];

      for (let i = 0; i < numCircles; i++) {
        const angle = (i / numCircles) * Math.PI * 2 * 2 + phase; // 2 rotations
        const distance = (i / numCircles) * maxRadius * Math.min(t, 1);
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        const radius = 8 + (distance / maxRadius) * 32; // Much larger circles

        circles.push({ x, y, radius });
      }

      return circles;
    };

    const animate = (t) => {
      const phase = (t * 0.1) % (Math.PI * 2); // Slower continuous rotation
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
      const gradient = svg.querySelector('linearGradient');
      circleElement.setAttribute('stroke', `url(#${gradient.id})`);
      circleElement.setAttribute('fill', 'none');
      circleElement.setAttribute('stroke-width', '1');
      svg.appendChild(circleElement);
    });

    animate(0);

    // Resize handler
    const handleResize = () => {
      svg.setAttribute('width', window.innerWidth);
      svg.setAttribute('height', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full">
    </svg>
  );
};

export default HelixAnimation;
