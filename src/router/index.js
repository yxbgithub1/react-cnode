import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import {
    Home,
    Login,
    Topic
} from 'view'

// const Topics = ({ match }) => (
// 	<div>
// 		<h2>Topics</h2>
// 		<ul>
// 			<li>
// 				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/components`}>Components</Link>
// 			</li>
// 			<li>
// 				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
// 			</li>
// 		</ul>

// 		<Route exact path={`${match.url}/:topicId`} component={Topic} />

// 		<Route
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
// 	</div>
// );
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );

export default class App extends Component  {
    render(){
        return (
            <Router>
                <div>
                    <header>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/Topic">Topics</Link>
                            </li>
                        </ul>
                    </header>
                    <hr />
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/Topic" component={Topic} />
                    </main>
                    <footer>脚部</footer>
                </div>
            </Router> 
        )
    }
}