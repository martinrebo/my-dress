import React, { Component } from 'react';
import styles from  './Dress.css';



class Dress extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'white'};
    
        // This binding is necessary to make `this` work in the callback
        this.handleColor = this.handleColor.bind(this);
      }

      handleColor() {
        this.setState(state => ({
          color: 'blue'
        }));
      }

    render() {
        return (
            <div>
                <p className={styles.letters}> Working </p>
                <canvas className={styles.canvas}>
                </canvas>
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke={this.state.color} strokeWidth="4" fill="yellow" />
</svg>

                <button onClick={this.handleColor}>Color handler</button>
            </div>


        );
    }
}

export default Dress;