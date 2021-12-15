import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Diamond extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="diamond page">
                <div className="btnContainer">
                    <Link to='/'>
                        <button>
                            Home
                        </button>
                    </Link> 
                </div>
                <div id="diamond"></div>
            </div>
        );
    }
}
 
export default Diamond;