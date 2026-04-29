import React from 'react';

const SmokeEffect = () => {
  // Generate random smoke particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 5}s`,
    scale: 0.5 + Math.random() * 1.5,
  }));

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1
    }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="smoke-particle"
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            transform: `scale(${p.scale})`
          }}
        />
      ))}
    </div>
  );
};

export default SmokeEffect;
