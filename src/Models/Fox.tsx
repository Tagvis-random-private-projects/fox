/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../../public/Fox.glb -Tot FoxG.tsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        fox: THREE.SkinnedMesh
        _rootJoint: THREE.Bone
    }
    materials: {
        fox_material: THREE.MeshStandardMaterial
    }
    animations: GLTFAction[];
}

type ActionName = 'Survey' | 'Walk' | 'Run'
interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}
export function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF('/Fox-transformed.glb') as unknown as GLTFResult;
    const { actions } = useAnimations<GLTFAction>(animations, group);
    useEffect(() => {
        actions.Walk?.play();
        setTimeout(() => {
            if (actions.Run && actions.Walk) {
                actions.Run.play();
                actions.Run.crossFadeFrom(actions.Walk, 1, true);
            }
        }, 2000);
    }, [actions]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group>
                <group name="root">
                    <primitive object={nodes._rootJoint} />
                </group>
                <skinnedMesh name="fox" geometry={nodes.fox.geometry} material={materials.fox_material} skeleton={nodes.fox.skeleton} />
            </group>
        </group>
    )
}

useGLTF.preload('/Fox-transformed.glb')
