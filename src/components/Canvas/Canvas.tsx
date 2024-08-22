import React, { Component } from 'react'
import './Canvas.scss'
import ImageScaler from './ImageScaler'
import LogoSwitch from './LogoSwitch'
import TextInput from './TextInput'

interface CanvasState {
  imageSrc: string | null;
  scale: number;
  showLogo: boolean;
  title: string;
  description: string;
}

export default class Canvas extends Component<{}, CanvasState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      imageSrc: null,
      scale: 1,
      showLogo: false,
      title: '',
      description: '',
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

  handleTitleChange = (title: string) => {
    this.setState({ title });
  };

  handleDescriptionChange = (description: string) => {
    this.setState({ description });
  };

  render() {
    const { imageSrc, scale, showLogo, title, description } = this.state;

    return (
      <div className="container">
        <div className="canvas">
          <div
            className="canvas__image"
            style={{
              backgroundImage: `url(${imageSrc})`,
              transform: `scale(${scale})`,
            }}
          >
          </div>
          {showLogo && <div className="canvas__logo" />}
          <div className="canvas__template" />
          <div className="canvas__text canvas__title">{title}</div>
            <div className="canvas__text canvas__description">{description}</div>
        </div>

        <input type="file" accept="image/*" onChange={this.handleImageUpload} className="canvas__upload-input" />
        <ImageScaler scale={scale} onChange={this.handleScaleChange} />
        <LogoSwitch showLogo={showLogo} onChange={this.handleLogoSwitchChange} />
        <TextInput title={title} description={description} onTitleChange={this.handleTitleChange} onDescriptionChange={this.handleDescriptionChange} />
      </div>
    );
  }
}
