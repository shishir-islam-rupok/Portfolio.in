import React, { useEffect, useRef } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.baseX = x;
      this.baseY = y;
      this.density = (Math.random() * 30) + 1;
      this.distance = undefined;
      this.velocity = {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1
      };
      this.color = '#64FFDA';
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(mouse, canvas) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 100;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }

      // Add some natural movement
      this.x += this.velocity.x * 0.2;
      this.y += this.velocity.y * 0.2;

      // Bounce off edges
      if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
      if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
    }
  }

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 9000);
    particlesRef.current = [];

    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particlesRef.current.push(new Particle(x, y));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current, canvas);
        particle.draw(ctx);
      });

      // Draw connections
      connectParticles(ctx);
      
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const connectParticles = (ctx) => {
    const maxDistance = 100;
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x;
        const dy = particlesRef.current[i].y - particlesRef.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 255, 218, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
          ctx.stroke();
        }
      }
    }
  };

  useEffect(() => {
    initCanvas();

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        initCanvas();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default Canvas;
