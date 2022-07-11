import { Icon } from '@mui/material';
import React, { Component } from 'react';
import '../index.css'

class Loading extends Component {
    render() {
        return (
            <div>
                <div id="loading">
                    <div>
                        <div className='fa-3x'>
                            <i class="fa-solid fa-loader"></i> <br/>
                            <h5>Por favor espere...</h5>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;