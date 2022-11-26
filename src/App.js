import {Component} from "react";
import './App.css';

class ChangeNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    decrement = () => {
        this.setState(state => ({
            counter: this.state.counter + 1
        }))
    }
    increment = () => {
        this.setState(state => ({
            counter: this.state.counter - 1
        }))
    }
    reset = () => {
        this.setState(state => ({
            counter: this.props.counter
        }))
    }


    render() {
        return (
            <div>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.reset}>reset</button>

                <h1>My counter now is {this.state.counter}</h1>
            </div>
        )
    };
}


function App() {
    return (
        <div className="App">
            <ChangeNumber counter={0}/>
        </div>
    );
}

export default App;
