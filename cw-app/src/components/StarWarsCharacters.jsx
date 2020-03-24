import React,{Component, Fragment} from 'react';

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characters: [],
         }
    }
    //when page loads, render loadData function
    componentDidMount(){
        this.loadData();
    }

    loadData= async() =>{
        //saving fetched api under response variable
        const response = await fetch('https://swapi.co/api/people/');
        //saving the returned information from the json method into json
        const json = await response.json();
        //sanity
        console.table(json.results);
        //updating state to retrieved array
        this.setState(
            {
                characters: json.results
            }
        )
        //sanity
        console.log(this.state.characters);
    }

    render() { 
        return ( 
            <Fragment>
                <h2 className='characterTitle'>StarWars Characters</h2>
                {
                    this.state.characters.map((star,index) =>{
                        return(
                            <div key={index} >
                                <p><span>Name:</span> {star.name}</p>
                                <p><span>Birth Year:</span> {star.birth_year}</p>
                                <p><span>Gender:</span> {star.gender}</p>
                                <hr/>
                            </div>
                        )
                    }

                    )
                }
            </Fragment>
         );
    }
}
 
export default StarWarsCharacters;