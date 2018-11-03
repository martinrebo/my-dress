import React from 'react';
import { CirclePicker } from 'react-color';

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            colors: ["#000000", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#ffffff"]
        };

        // This binding is necessary to make `this` work in the callback
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };


  render() {
    return <CirclePicker
    colors={this.state.colors}
    onChangeComplete={this.props.handleChangeComplete} />;
  }
}

export default ColorPicker;