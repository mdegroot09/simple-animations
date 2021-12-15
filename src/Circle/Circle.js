import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="circle page">
                <div className="btnContainer">
                    <Link to='/'>
                        <button>
                            Home
                        </button>
                    </Link> 
                </div>
                <div id="circle"></div>
            </div>
        );
    }
}
 
export default Circle;