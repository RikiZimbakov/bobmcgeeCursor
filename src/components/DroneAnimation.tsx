import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Effects } from '@react-three/drei';
import * as THREE from 'three';
import BobCharacter from './BobCharacter';
import RivalCharacter from './RivalCharacter';

const BouncingText = () => {
  const textRef = useRef<THREE.Group>(null);
  const [velocity] = useState(() => new THREE.Vector3(0.02, 0.01, 0));
  const [position] = useState(() => new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    if (textRef.current) {
      // Update position based on velocity
      position.add(velocity);
      textRef.current.position.copy(position);

      // Bounce off edges
      if (Math.abs(position.x) > 4) velocity.x *= -1;
      if (Math.abs(position.y) > 2) velocity.y *= -1;

      // Add slight rotation
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={textRef}>
      <Text
        fontSize={1.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#ff69b4"
        outlineOpacity={0.5}
      >
        Bob McGee
      </Text>
    </group>
  );
};

const ImpactEffect = ({ position, color }: { position: THREE.Vector3; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0.1);

  useFrame((state, delta) => {
    if (meshRef.current) {
      setScale((prev) => {
        const newScale = prev + delta * 2;
        if (newScale > 1) return 0;
        return newScale;
      });
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={1 - scale} />
    </mesh>
  );
};

const FightingScene = () => {
  const sceneRef = useRef<THREE.Group>(null);
  const [fightState, setFightState] = useState<'idle' | 'punching' | 'kicking' | 'special' | 'blocking'>('idle');
  const [fightTimer, setFightTimer] = useState(0);
  const [impacts, setImpacts] = useState<Array<{ position: THREE.Vector3; color: string }>>([]);

  useFrame((state, delta) => {
    if (sceneRef.current) {
      // Update fight timer
      setFightTimer((prev) => prev + delta);

      // Change fight state every 1.5 seconds
      if (fightTimer > 1.5) {
        setFightTimer(0);
        setFightState((prev) => {
          const states: Array<'idle' | 'punching' | 'kicking' | 'special' | 'blocking'> =
            ['idle', 'punching', 'kicking', 'special', 'blocking'];
          const currentIndex = states.indexOf(prev);
          const nextIndex = (currentIndex + 1) % states.length;
          return states[nextIndex];
        });

        // Add impact effect
        const impactPosition = new THREE.Vector3(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          0
        );
        const impactColor = Math.random() > 0.5 ? '#ff69b4' : '#4169e1';
        setImpacts((prev) => [...prev, { position: impactPosition, color: impactColor }]);
      }

      // Animate based on fight state
      switch (fightState) {
        case 'punching':
          sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 8) * 0.2;
          break;
        case 'kicking':
          sceneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 8) * 0.2;
          break;
        case 'special':
          sceneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 10) * 0.3;
          break;
        case 'blocking':
          sceneRef.current.position.y = Math.sin(state.clock.elapsedTime * 6) * 0.1;
          break;
        default:
          sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      }
    }
  });

  return (
    <group ref={sceneRef}>
      <BobCharacter />
      <RivalCharacter />
      {impacts.map((impact, index) => (
        <ImpactEffect key={index} position={impact.position} color={impact.color} />
      ))}
    </group>
  );
};

const DroneAnimation = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff69b4" />
        <pointLight position={[10, -10, 10]} intensity={0.5} color="#4169e1" />
        <BouncingText />
        <FightingScene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default DroneAnimation;
