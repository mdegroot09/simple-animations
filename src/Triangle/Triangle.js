import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Triangle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="triangle page">
                <div className="btnContainer">
                    <Link to='/'>
                        <button>
                            Home
                        </button>
                    </Link> 
                </div>
                <div id="triangle"></div>
            </div>
         );
    }
}
 
export default Triangle;