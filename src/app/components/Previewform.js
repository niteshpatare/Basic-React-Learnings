import React from 'react';
import { ErrorBoundary } from "../components/ErrorBoundary";
import PropTypes from 'prop-types';

export class Previewform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            InitialAge: props.InitialAge,
            Staus: 0
         }
         setTimeout( () => {
            this.setState({
                Staus: 1
            });
            console.log(this.state);
        },5000);
    }
    onMakeOlder(){
        this.setState({
            InitialAge: this.state.InitialAge +3
        });
    }



    
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="formData">
                <p>
                { this.props.children }
                </p>
                <p><b>{this.props.FormName}</b></p>
                <p>
                    Name: <span>{ this.props.User.name}</span>
                </p>                    
                <p>
                    Age: <span>{ this.state.InitialAge}</span>
                </p>
                <p> 
                    Staus: <span>{ this.state.Staus}</span>
                </p>
                <p>
                <button onClick={ () => this.onMakeOlder() } > Increase Age </button>
                </p>
                <hr/>
                <p>
                <button onClick={ () => this.props.OnGreet() } > Greet </button>
                </p>
                <div>
                    <ul>
                        {
                            this.props.User.hobbies.map(
                                (hobby, i) => <li key={i} >{hobby}</li>
                            )
                        }
                    </ul>
                </div>
                <p>
                Amount: <span></span>
                </p>
            </div>
        );
    }
}

Previewform.PropTypes = {
    FormName: PropTypes.string,
    User: PropTypes.object,
    children: PropTypes.element.isRequired
};

// Specifies the default values for props:
Previewform.defaultProps = {
    InitialAge: 18
};
  