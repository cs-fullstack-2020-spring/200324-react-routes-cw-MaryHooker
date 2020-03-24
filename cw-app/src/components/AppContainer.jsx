import React,{Component} from 'react';
import StarWarsCharacters from './StarWarsCharacters';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1  className='mainTitle'>Star Wars</h1>
                <StarWarsCharacters/>
            </div>
         );
    }
}
 
export default AppContainer;