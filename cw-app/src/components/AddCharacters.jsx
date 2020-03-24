import React, { Component } from 'react';

class AddCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birth: '',
            gender: '',
        }
    }

    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value })
        } else if (event.target.name === 'birth') {
            this.setState({ birth: event.target.value })
        } else if (event.target.name === 'gender') {
            this.setState({ gender: event.target.value })
        }
    }

    handleSubmission = (event) =>{
        event.preventDefault();

        
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>New Character</legend>

                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <label htmlFor="birth">Birth Year: </label>
                            <input type="text" id='birth' name='birth' value={this.state.birth} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <label htmlFor="gender">Gender: </label>
                            <input type="text" id='gender' name='gender' value={this.state.gender} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <button onClick={this.handleSubmission}>Add Me</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default AddCharacters;