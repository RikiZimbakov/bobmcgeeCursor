import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BobCharacter = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Create a simple character using basic geometries
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Gentle floating animation
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
            // Gentle rotation
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, -1, 0]}>
            {/* Chest */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.5, 1.2, 0.8]} />
                <meshStandardMaterial color="#ff69b4" />
            </mesh>

            {/* Abs */}
            <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[1.4, 0.8, 0.7]} />
                <meshStandardMaterial color="#ff69b4" />
            </mesh>

            {/* Shoulders */}
            <mesh position={[-0.9, 0.8, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
            <mesh position={[0.9, 0.8, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>

            {/* Head */}
            <mesh position={[0, 1.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>

            {/* Unicorn Horn */}
            <mesh position={[0, 2, 0]}>
                <coneGeometry args={[0.1, 0.3, 32]} />
                <meshStandardMaterial color="#ffffff" emissive="#ff69b4" emissiveIntensity={0.5} />
            </mesh>

            {/* Eyes */}
            <mesh position={[-0.2, 1.6, 0.4]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.2, 1.6, 0.4]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Biceps */}
            <mesh position={[-1.1, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.2, 0.3, 1, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
            <mesh position={[1.1, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.2, 0.3, 1, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>

            {/* Forearms */}
            <mesh position={[-1.3, -0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
                <cylinderGeometry args={[0.15, 0.2, 0.8, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
            <mesh position={[1.3, -0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.15, 0.2, 0.8, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>

            {/* Thighs */}
            <mesh position={[-0.4, -1.2, 0]}>
                <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
            <mesh position={[0.4, -1.2, 0]}>
                <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>

            {/* Calves */}
            <mesh position={[-0.4, -2.2, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 0.8, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
            <mesh position={[0.4, -2.2, 0]}>
                <cylinderGeometry args={[0.2, 0.3, 0.8, 32]} />
                <meshStandardMaterial color="#ffb6c1" />
            </mesh>
        </group>
    );
};

export default BobCharacter;
