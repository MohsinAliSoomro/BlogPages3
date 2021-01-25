import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PageOne from './page1';
import PageTwo from './page2';
import PageThree from './page3';

function App() {
	return (
		<BrowserRouter>
			<Link to="/">Page One</Link>
			<Link to="/two">Page Two</Link>
			<Link to="/three">Page Three</Link>
			<Switch>
				<Route exact path="/">
					<PageOne />
				</Route>
				<Route path="/two">
					<PageTwo />
				</Route>
				<Route path="/three">
					<PageThree />
				</Route>\
			</Switch>
		</BrowserRouter>
	);
}

export default App;
