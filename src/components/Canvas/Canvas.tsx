import React, { Component } from 'react'
import './Canvas.scss'

interface CanvasState {
  imageSrc: string | null;
}

export default class Canvas extends Component<{}, CanvasState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      imageSrc: null,
    };
  }

  handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageSrc = URL.createObjectURL(file);
      this.setState({ imageSrc });
    }
  };

  render(): React.ReactNode {
    const { imageSrc } = this.state;

    return (
      <div className="canvas">
        {/* IMG */}
        <div className="canvas__image" style={{ backgroundImage: `url(${imageSrc})` }} />
        <input type="file" accept="image/*" onChange={this.handleImageUpload} className="canvas__upload-input" />
      </div>
    );
  }
}
