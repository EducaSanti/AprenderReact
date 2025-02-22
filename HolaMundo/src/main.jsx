import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

// Los componentes deben ser PascalCase. Ej. CuadroText

/* const Button = ({text}) => {
  return (
    <button>{text}</button>
  );
}; */

root.render(
  <App />
);
