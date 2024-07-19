import React, {Suspense, useEffect} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader';

const Laptop = ({isMobile}) => {
    const {scene} = useGLTF('./laptop/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor="black"/>
            <pointLight intensity={20}/>
            <spotLight position={[-20, 50, 10]}
                       angle={1}
                       penumbra={1}
                       intensity={20}
                       />
            <primitive object={scene}
                       scale={isMobile ? 0.2: 0.25 }
                       position={isMobile ? [0,-15,0] : [0, -15, 0]}
                       rotation={[-0.01, 0.2, 0.1]}/>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 500px)');
            setIsMobile(mediaQuery.matches)
            const handleMediaQueryChange = (event) => {
                setIsMobile(event.matches);
            }
            mediaQuery.addEventListener('change', handleMediaQueryChange);
            
            return () => {mediaQuery.removeEventListener('change', handleMediaQueryChange);}
        },
        [])
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position: [0, 50, 40], fov: 100}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Laptop isMobile={isMobile} />
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;
