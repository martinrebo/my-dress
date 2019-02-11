import React, { Component } from 'react';
import styles from './Dress.css';
import { CirclePicker } from 'react-color';
// import ColorPicker from '../color/Color' TODO> Color picker compotnet
import Order from '../order/Order';
import Size from '../size/Size';



class Dress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: 'summer dress',
            color: '#ffffff',
            size: 'S'
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        // this.handleSize = this.handleSize.bind(this);
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    handleSmallSize = (size) => {
        this.setState({ size: 'small' })
    };
    handleMediumSize = (size) => {
        this.setState({ size: 'medium' })
    };
    handleLargeSize = (size) => {
        this.setState({ size: 'large' })
    };

    handleSize = (event, size) => {
        this.setState({ size: 'large' })
    };


    render() {
        return (
            <div>
                <p className={styles.letters}>Select your Model </p>
                <div>
                    {/* Original SVG https://www.svgrepo.com/svg/10212/dress */}
                    <svg width="300" height="300">
                        <path d="m226.202,243.116c-1.197-2.636-5.532-14.286-10.121-26.62-5.595-15.039-11.937-32.085-15.068-39.485-2.841-6.715-11.495-22.688-20.658-39.598-9.465-17.469-19.253-35.531-21.63-41.627-0.234-0.631-1.922-7.242 10.786-44.646 6.71-19.747 14.089-38.235 14.163-38.42l2.01-5.026-24.763-7.687-4.274,30.25-31.522,14.201-31.416-14.619-4.103-29.839-24.763,7.687 1.983,5.016c0.073,0.185 7.362,18.648 13.993,38.4 12.572,37.448 10.87,44.054 10.636,44.682-2.373,6.085-12.138,24.107-21.58,41.535-9.188,16.959-17.867,32.979-20.711,39.714-3.109,7.366-9.428,24.335-15.001,39.306-4.62,12.408-8.983,24.129-10.187,26.779l-3.205,7.065h208.641l-3.21-7.068z" stroke="black" strokeWidth="1" fill={this.state.color} />
                    </svg>
                </div>
                <div className={styles.button}>
                    <button onClick={this.handleSmallSize}>Small</button>
                    <button onClick={this.handleMediumSize}>Medium</button>
                    <button onClick={this.handleLargeSize}>Large</button>
                </div>
                <div className={styles.picker}>

                    <p> Select your Color</p>
                    <div className={styles.pickercontainer}>
                        <CirclePicker
                            colors={this.state.colors}
                            onChangeComplete={this.handleChangeComplete} />
                    </div>
                </div>
                <Order
                model={this.state.model}
                    color={this.state.color}
                    size={this.state.size} />

            </div>
        );
    }
}

export default Dress;