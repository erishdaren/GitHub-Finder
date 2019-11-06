import './App.css';
import Navbar from './components/layout/Navbar';
import React,{Component} from 'react';

export default class App extends Component {
    render() {
      
        return (
            <div className="App">
                 <Navbar />
            </div>
        );
    }
}