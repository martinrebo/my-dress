import React from 'react';
import styles from './Order.css';

const Order = (props) => {
    const colorOrder = props.color;
    const sizeOrder = props.size;
    const modelOrder = props.model;
    return (
        <div className={styles.checkout}> 
            <p>List of things ORDER READY </p>
            <li>Model: {modelOrder}</li>
            <li>Color: {colorOrder} </li>
            <li>Size: {sizeOrder} </li>
            <button> SUBMIT ORDER </button>
        </div>
    );
}

export default Order;
