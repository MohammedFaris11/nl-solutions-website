import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Bypass TypeScript checks for R3F intrinsic elements
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;

const generateSphere = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Generate points uniformly in a sphere
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = Math.cbrt(Math.random()) * radius; 

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

interface ParticleFieldProps {
  particleCount?: number;
}

const ParticleField = ({ particleCount = 3000 }: ParticleFieldProps) => {
  const ref = useRef<any>(null);
  // Generate points in a sphere using native function instead of maath
  const [sphere] = React.useState(() => generateSphere(particleCount, 1.5));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2e92d0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Group>
  );
};

const ConnectingLines = () => {
    const ref = useRef<any>(null);
    
    useFrame((state) => {
        if(ref.current) {
            ref.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Mesh ref={ref} scale={[2,2,2]}>
            <IcosahedronGeometry args={[1, 2]} />
            <MeshBasicMaterial color="#fbbf24" wireframe transparent opacity={0.05} />
        </Mesh>
    )
}

interface SceneProps {
  opacity?: number;
  particleCount?: number;
  className?: string;
}

export default function Scene({ opacity = 0.6, particleCount = 3000, className = "" }: SceneProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };
    
    // Vérifier le support WebGL
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          console.warn('WebGL not supported, disabling 3D scene');
          setHasError(true);
        }
      } catch (error) {
        console.warn('WebGL check failed:', error);
        setHasError(true);
      }
    };
    
    checkMobile();
    checkWebGL();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sur mobile, réduire drastiquement les particules ou désactiver
  const adjustedParticleCount = isMobile ? Math.min(particleCount, 500) : particleCount;

  // Si erreur, ne pas afficher la scène
  if (hasError) {
    return (
      <div className={`absolute inset-0 z-0 ${className}`} style={{ opacity, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }} />
    );
  }

  if (hasError) {
    return (
      <div className={`absolute inset-0 z-0 ${className}`} style={{ opacity, background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }} />
    );
  }

  return (
    <div className={`absolute inset-0 z-0 ${className}`} style={{ opacity }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={() => {
          // Canvas créé avec succès
        }}
      >
        <ParticleField particleCount={adjustedParticleCount} />
        {!isMobile && <ConnectingLines />}
      </Canvas>
    </div>
  );
}