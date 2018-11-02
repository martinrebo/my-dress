import React, { Component } from 'react';
import styles from  './Dress.css';


let colorHandler = () => {
    
    return console.log(styles.canvas);
} 

class Dress extends Component {

    render() {
        return (
            <div>
                <p className={styles.letters}> Working </p>
                <canvas className={styles.canvas}>
                </canvas>

                <button onClick={colorHandler}>Color handler</button>
            </div>


        );
    }
}

export default Dress;