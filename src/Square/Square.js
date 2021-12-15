import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAnimate} from '../redux/reducer';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div className="square page">
                <div className="btnContainer">
                    <Link to='/'>
                        <button>
                            Home
                        </button>
                    </Link> 
                </div>
                <div id="square"></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    let {animate} = state
    return {
        animate
    }
}

const mapStateToDispatch = {
    updateAnimate
}
 
export default connect(mapStateToProps, mapStateToDispatch)(Square);