import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Canvas from './components/Canvas'
import './App.scss'

function App() {
	return (
		<div className="App">

			<Router basename='react-tetris'>
				<Routes>	
					<Route path="/" element={<Canvas />} />
				</Routes>
			</Router>
		
		</div>
		);
	}
	
	export default App;
	
