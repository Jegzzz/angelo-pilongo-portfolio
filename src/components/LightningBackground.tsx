import React, { useEffect, useRef } from 'react';

interface LightningBranch {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  segments: { x: number; y: number }[];
  subBranches: LightningBranch[];
}

interface ActiveBolt {
  id: number;
  branches: LightningBranch[];
  birthTime: number;
  duration: number; // ms
  maxOpacity: number;
  glowIntensity: number;
  colorType: 'cyan' | 'electric-blue' | 'sky';
}

export const LightningBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Active lightning bolts
    const activeBolts: ActiveBolt[] = [];
    let lastBoltTime = performance.now();
    let nextBoltDelay = 2000 + Math.random() * 3500; // Strike every 2 - 5.5s

    // Ambient floating electric charge particles (very subtle)
    interface ChargeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      pulseSpeed: number;
    }

    const particles: ChargeParticle[] = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 1 + Math.random() * 2,
      baseAlpha: 0.1 + Math.random() * 0.2,
      alpha: 0.1,
      pulseSpeed: 0.002 + Math.random() * 0.003,
    }));

    // Midpoint displacement algorithm to generate realistic lightning path
    const createLightningSegments = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      displacement: number,
      minSegmentLength: number = 8
    ): { x: number; y: number }[] => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minSegmentLength) {
        return [
          { x: x1, y: y1 },
          { x: x2, y: y2 },
        ];
      }

      // Midpoint
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;

      // Normal vector
      const nx = -dy / distance;
      const ny = dx / distance;

      // Random displacement perpendicular to segment
      const offset = (Math.random() - 0.5) * displacement * 2;
      const displacedMidX = midX + nx * offset;
      const displacedMidY = midY + ny * offset;

      const leftSegments = createLightningSegments(
        x1,
        y1,
        displacedMidX,
        displacedMidY,
        displacement * 0.55,
        minSegmentLength
      );
      const rightSegments = createLightningSegments(
        displacedMidX,
        displacedMidY,
        x2,
        y2,
        displacement * 0.55,
        minSegmentLength
      );

      return [...leftSegments.slice(0, -1), ...rightSegments];
    };

    const generateLightningBranch = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      depth: number = 0
    ): LightningBranch => {
      const distance = Math.hypot(endX - startX, endY - startY);
      const initialDisplacement = Math.min(distance * 0.25, 45);
      const segments = createLightningSegments(startX, startY, endX, endY, initialDisplacement);

      const subBranches: LightningBranch[] = [];

      // Generate 1-2 smaller side forks on primary/secondary branches
      if (depth < 2 && segments.length > 6) {
        const numForks = depth === 0 ? 1 + (Math.random() > 0.4 ? 1 : 0) : Math.random() > 0.6 ? 1 : 0;
        for (let i = 0; i < numForks; i++) {
          const splitIdx = Math.floor(segments.length * (0.3 + Math.random() * 0.45));
          const splitPoint = segments[splitIdx];
          if (splitPoint) {
            // Angle off from main direction
            const angle = Math.atan2(endY - startY, endX - startX) + (Math.random() - 0.5) * 1.2;
            const forkLength = distance * (0.25 + Math.random() * 0.35);
            const forkEndX = splitPoint.x + Math.cos(angle) * forkLength;
            const forkEndY = splitPoint.y + Math.sin(angle) * forkLength;

            subBranches.push(generateLightningBranch(splitPoint.x, splitPoint.y, forkEndX, forkEndY, depth + 1));
          }
        }
      }

      return {
        startX,
        startY,
        endX,
        endY,
        segments,
        subBranches,
      };
    };

    const spawnLightningBolt = (customStartX?: number, customStartY?: number) => {
      const isCornerStrike = Math.random() > 0.4;
      let startX: number;
      let startY: number;
      let endX: number;
      let endY: number;

      if (customStartX !== undefined && customStartY !== undefined) {
        startX = customStartX;
        startY = customStartY;
        endX = startX + (Math.random() - 0.5) * 260;
        endY = startY + 150 + Math.random() * 220;
      } else if (isCornerStrike) {
        // Strike from top edge or corner down towards background center/side
        const fromLeft = Math.random() > 0.5;
        startX = fromLeft ? Math.random() * (width * 0.35) : width * 0.65 + Math.random() * (width * 0.35);
        startY = Math.random() * 80;
        endX = startX + (Math.random() - 0.5) * 300;
        endY = startY + 220 + Math.random() * (height * 0.5);
      } else {
        // Atmospheric cloud-to-cloud horizontal/diagonal discharge
        startX = Math.random() * width;
        startY = Math.random() * (height * 0.6);
        endX = startX + (Math.random() - 0.5) * 450;
        endY = startY + (Math.random() - 0.2) * 350;
      }

      const mainBranch = generateLightningBranch(startX, startY, endX, endY, 0);

      const colorPalette: ('cyan' | 'electric-blue' | 'sky')[] = ['cyan', 'electric-blue', 'sky'];
      const colorType = colorPalette[Math.floor(Math.random() * colorPalette.length)];

      activeBolts.push({
        id: Math.random(),
        branches: [mainBranch],
        birthTime: performance.now(),
        duration: 350 + Math.random() * 300, // 350 - 650ms
        maxOpacity: 0.35 + Math.random() * 0.3, // Kept subtle (0.35 - 0.65)
        glowIntensity: 12 + Math.random() * 12,
        colorType,
      });
    };

    // Draw branch recursively
    const renderBranch = (branch: LightningBranch, opacity: number, colorType: string, widthScale: number = 1) => {
      if (branch.segments.length < 2) return;

      let strokeColorCore = `rgba(255, 255, 255, ${opacity * 0.95})`;
      let strokeColorOuter = `rgba(56, 189, 248, ${opacity * 0.6})`;
      let shadowColor = '#38bdf8';

      if (colorType === 'electric-blue') {
        strokeColorOuter = `rgba(96, 165, 250, ${opacity * 0.7})`;
        shadowColor = '#60a5fa';
      } else if (colorType === 'cyan') {
        strokeColorOuter = `rgba(103, 232, 249, ${opacity * 0.75})`;
        shadowColor = '#22d3ee';
      } else {
        strokeColorOuter = `rgba(147, 197, 253, ${opacity * 0.65})`;
        shadowColor = '#93c5fd';
      }

      // 1. Draw outer glowing electric aura
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(branch.segments[0].x, branch.segments[0].y);
      for (let i = 1; i < branch.segments.length; i++) {
        ctx.lineTo(branch.segments[i].x, branch.segments[i].y);
      }
      ctx.strokeStyle = strokeColorOuter;
      ctx.lineWidth = Math.max(1.8 * widthScale, 1.2);
      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = 14 * widthScale;
      ctx.stroke();
      ctx.restore();

      // 2. Draw inner bright core
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(branch.segments[0].x, branch.segments[0].y);
      for (let i = 1; i < branch.segments.length; i++) {
        ctx.lineTo(branch.segments[i].x, branch.segments[i].y);
      }
      ctx.strokeStyle = strokeColorCore;
      ctx.lineWidth = Math.max(0.9 * widthScale, 0.6);
      ctx.stroke();
      ctx.restore();

      // Render recursive sub-branches with thinner stroke
      for (const sub of branch.subBranches) {
        renderBranch(sub, opacity * 0.75, colorType, widthScale * 0.65);
      }
    };

    // Animation Loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Ambient deep electrical background glow (subtle, pulsing)
      const pulse1 = Math.sin(time * 0.0008) * 0.02 + 0.035;
      const pulse2 = Math.cos(time * 0.0006) * 0.02 + 0.035;

      const grad1 = ctx.createRadialGradient(width * 0.85, height * 0.15, 20, width * 0.85, height * 0.15, width * 0.55);
      grad1.addColorStop(0, `rgba(37, 99, 235, ${pulse1})`);
      grad1.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.8, 10, width * 0.15, height * 0.8, width * 0.45);
      grad2.addColorStop(0, `rgba(14, 165, 233, ${pulse2})`);
      grad2.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Charge particles (floating subtle electric motes)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.baseAlpha + Math.sin(time * p.pulseSpeed + p.x) * 0.08;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${Math.max(currentAlpha, 0.03)})`;
        ctx.shadowColor = '#60a5fa';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      // 3. Periodic automatic lightning bolt trigger
      if (time - lastBoltTime > nextBoltDelay) {
        spawnLightningBolt();
        lastBoltTime = time;
        // Occasional double-strike burst
        if (Math.random() > 0.65) {
          nextBoltDelay = 120 + Math.random() * 200;
        } else {
          nextBoltDelay = 2200 + Math.random() * 4000;
        }
      }

      // 4. Render Active Lightning Bolts
      for (let i = activeBolts.length - 1; i >= 0; i--) {
        const bolt = activeBolts[i];
        const elapsed = time - bolt.birthTime;

        if (elapsed > bolt.duration) {
          activeBolts.splice(i, 1);
          continue;
        }

        // Lightning flicker curve: sharp spike, fast multi-flicker decay
        const progress = elapsed / bolt.duration;
        let flicker = 1;
        if (progress < 0.1) {
          flicker = progress / 0.1;
        } else {
          // Multi-flicker oscillation as it fades
          const osc = Math.sin(progress * Math.PI * 8);
          flicker = (1 - progress) * (0.6 + 0.4 * (osc > 0 ? 1 : 0.3));
        }

        const opacity = Math.max(0, bolt.maxOpacity * flicker);

        if (opacity > 0.01) {
          // Subtle atmospheric flash accompanying the strike
          if (progress < 0.15) {
            const flashGrad = ctx.createRadialGradient(
              bolt.branches[0].startX,
              bolt.branches[0].startY,
              20,
              bolt.branches[0].startX,
              bolt.branches[0].startY,
              width * 0.7
            );
            flashGrad.addColorStop(0, `rgba(56, 189, 248, ${opacity * 0.12})`);
            flashGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
            ctx.fillStyle = flashGrad;
            ctx.fillRect(0, 0, width, height);
          }

          for (const branch of bolt.branches) {
            renderBranch(branch, opacity, bolt.colorType, 1);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="subtle-lightning-background"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-80"
    />
  );
};
