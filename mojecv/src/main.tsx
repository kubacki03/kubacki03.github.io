
import { createRoot } from 'react-dom/client'
import './index.css'
import MeComponent from './MeComponent';
import Skills from './Skills';
import Technologies from './Technologies';
import Projects from './Projects';

createRoot(document.getElementById('root')!).render(
    <>
    <h2>Komponenty</h2>
    <MeComponent />
    <Skills />
    <Technologies />
    <Projects />
    </>
)