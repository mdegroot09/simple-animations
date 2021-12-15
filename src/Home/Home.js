import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div className="home">
                <div className="homeBtns">
                    <Link to='/square'>
                        <button>Square</button>
                    </Link>
                </div>
                <div className="homeBtns">
                    <Link to='/circle'>
                        <button>Circle</button>
                    </Link>
                </div>
                <div className="homeBtns">
                    <Link to='/square'>
                        <button>Square</button>
                    </Link>
                </div>
                <div className="homeBtns">
                    <Link to='/square'>
                        <button>Square</button>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default Home;