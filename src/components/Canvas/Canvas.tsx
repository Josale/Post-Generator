// Canvas.tsx
import React, { Component } from 'react'
import './Canvas.scss'
import ImageScaler from './ImageScaler'
import LogoSwitch from './LogoSwitch'
import TextInput from './TextInput'

interface CanvasState {
  imageSrc: string | null;
  scale: number;
  showLogo: boolean;
  text: string;
}

class Canvas extends Component<{}, CanvasState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      imageSrc: null,
      scale: 1,
      showLogo: false,
      text: '',
    };
  }

  handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageSrc = URL.createObjectURL(file);
      this.setState({ imageSrc });
    }
  };

  handleScaleChange = (scale: number) => {
    this.setState({ scale });
  };

  handleLogoSwitchChange = (showLogo: boolean) => {
    this.setState({ showLogo });
  };

  handleTextChange = (text: string) => {
    this.setState({ text });
  };

  handleGenerateImage = () => {
    console.log('Generating image with state:', this.state);
  };

  render() {
    const { imageSrc, scale, showLogo, text } = this.state;

    return (
      <div className='container'>
        <div className="canvas">
          <div className="canvas__image" style={{ backgroundImage: `url(${imageSrc})`, transform: `scale(${scale})` }} />
          <input type="file" accept="image/*" onChange={this.handleImageUpload} className="canvas__upload-input" />
        </div>

        <ImageScaler scale={scale} onChange={this.handleScaleChange} />
        <LogoSwitch showLogo={showLogo} onChange={this.handleLogoSwitchChange} />
        <TextInput text={text} onTextChange={this.handleTextChange} />

        <button onClick={this.handleGenerateImage} className="canvas__generate-button">
          Generate Image
        </button>
      </div>
    );
  }
}

export default Canvas;
