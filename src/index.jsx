import * as ReactDOMClient from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App/>);