import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei";
import './App.css'
import {Model as Fox} from './Models/Fox';

function App() {
    return (
        <Canvas>
            <Stage adjustCamera environment="dawn" preset="soft">
            <Fox scale={0.02} />
            </Stage>
            <OrbitControls />
        </Canvas>
    )
}

export default App
