import React, { Component } from 'react';
import StarWarsCharacters from './StarWarsCharacters';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddCharacters from './AddCharacters';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1 className='mainTitle'>Star Wars</h1>
                <div>
                    {/* Used Router, Link, Route and imported above to link AddCharacters page */}
                    <Router>
                        <div className='links'>
                            <Link to="/" className='base'  >Base</Link>
                            <br />
                            <br />
                        </div>
                        <div className='links'>
                            <Link to="/characters" className='add'>Add A Character</Link>
                            <br />
                            <br />
                        </div>
                        <Route path="/characters">
                            <AddCharacters />
                        </Route>
                    </Router>
                </div>

                <StarWarsCharacters />
            </div>
        );
    }
}

export default AppContainer;