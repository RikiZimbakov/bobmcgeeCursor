import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RivalCharacter = () => {
    const groupRef = useRef<THREE.Group>(null);
    const leftArmRef = useRef<THREE.Group>(null);
    const rightArmRef = useRef<THREE.Group>(null);
    const leftLegRef = useRef<THREE.Group>(null);
    const rightLegRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Fighting stance animation
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
            // Aggressive rotation
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;

            // Animate arms and legs
            if (leftArmRef.current) {
                leftArmRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3) * 0.5;
            }
            if (rightArmRef.current) {
                rightArmRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3 + Math.PI) * 0.5;
            }
            if (leftLegRef.current) {
                leftLegRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.3;
            }
            if (rightLegRef.current) {
                rightLegRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2 + Math.PI) * 0.3;
            }
        }
    });

    return (
        <group ref={groupRef} position={[2, -1, 0]}>
            {/* Chest */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[1.5, 1.2, 0.8]} />
                <meshStandardMaterial color="#4169e1" />
            </mesh>

            {/* Abs */}
            <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[1.4, 0.8, 0.7]} />
                <meshStandardMaterial color="#4169e1" />
            </mesh>

            {/* Shoulders */}
            <mesh position={[-0.9, 0.8, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#1e90ff" />
            </mesh>
            <mesh position={[0.9, 0.8, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#1e90ff" />
            </mesh>

            {/* Head */}
            <mesh position={[0, 1.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#1e90ff" />
            </mesh>

            {/* Devil Horns */}
            <mesh position={[-0.2, 2, 0]}>
                <coneGeometry args={[0.1, 0.3, 32]} />
                <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.2, 2, 0]}>
                <coneGeometry args={[0.1, 0.3, 32]} />
                <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
            </mesh>

            {/* Eyes */}
            <mesh position={[-0.2, 1.6, 0.4]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ff0000" />
            </mesh>
            <mesh position={[0.2, 1.6, 0.4]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ff0000" />
            </mesh>

            {/* Left Arm */}
            <group ref={leftArmRef} position={[-1.1, 0.5, 0]}>
                {/* Bicep */}
                <mesh rotation={[0, 0, Math.PI / 4]}>
                    <cylinderGeometry args={[0.2, 0.3, 1, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
                {/* Forearm */}
                <mesh position={[-0.5, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <cylinderGeometry args={[0.15, 0.2, 0.8, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
            </group>

            {/* Right Arm */}
            <group ref={rightArmRef} position={[1.1, 0.5, 0]}>
                {/* Bicep */}
                <mesh rotation={[0, 0, -Math.PI / 4]}>
                    <cylinderGeometry args={[0.2, 0.3, 1, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
                {/* Forearm */}
                <mesh position={[0.5, -0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
                    <cylinderGeometry args={[0.15, 0.2, 0.8, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
            </group>

            {/* Left Leg */}
            <group ref={leftLegRef} position={[-0.4, -1.2, 0]}>
                {/* Thigh */}
                <mesh>
                    <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
                {/* Calf */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.2, 0.3, 0.8, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
            </group>

            {/* Right Leg */}
            <group ref={rightLegRef} position={[0.4, -1.2, 0]}>
                {/* Thigh */}
                <mesh>
                    <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
                {/* Calf */}
                <mesh position={[0, -1, 0]}>
                    <cylinderGeometry args={[0.2, 0.3, 0.8, 32]} />
                    <meshStandardMaterial color="#1e90ff" />
                </mesh>
            </group>
        </group>
    );
};

export default RivalCharacter;
