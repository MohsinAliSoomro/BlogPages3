import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PageOne from './page1';
import PageTwo from './page2';
import PageThree from './page3';
import PageFour from './page4';

function App() {
	return (
		<BrowserRouter>
			<Link to="/">Page One</Link>
			<Link to="/two">Page Two</Link>
			<Link to="/three">Page Three</Link>
			<Link to="/four">Page Four</Link>
			<Switch>
				<Route exact path="/">
					<PageOne />
				</Route>
				<Route path="/two">
					<PageTwo />
				</Route>
				<Route path="/three">
					<PageThree />
				</Route>
				<Route path="/four">
					<PageFour />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
