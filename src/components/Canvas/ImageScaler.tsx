import React, { Component } from 'react'

interface ImageScalerProps {
  scale: number;
  onChange: (value: number) => void;
}

export default class ImageScaler extends Component<ImageScalerProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(parseFloat(e.target.value));
  };

  render() {
    const { scale } = this.props;

    return (
      <div className="scale-slider">
        <label htmlFor="scale">Scale:</label>
        <input type="range" id="scale" min="1" max="10" step="0.1" value={scale} onChange={this.handleChange} />
        <span>{scale}</span>
      </div>
    );
  }
}