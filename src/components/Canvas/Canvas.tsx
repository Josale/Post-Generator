import React, { Component } from 'react'
import './Canvas.scss'
import ImageDragger from './ImageDragger'
import ImageScaler from './ImageScaler'
import LogoSwitch from './LogoSwitch'
import TextInput from './TextInput'

interface CanvasState {
  imageSrc: string | null;
  scale: number;
  showLogo: boolean;
  title: string;
  description: string;
  imageX: number;
  imageY: number;
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
      imageX: 0, 
      imageY: 0,
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

  handleDrag = (deltaX: number, deltaY: number) => {
    this.setState((prevState) => ({
      imageX: prevState.imageX + deltaX,
      imageY: prevState.imageY + deltaY,
    }));
  };

  render() {
    const { imageSrc, scale, showLogo, title, description, imageX, imageY } = this.state;

    return (
      <div className="container">
        <div className="canvas">
          <ImageDragger onDrag={this.handleDrag}>
            <div
              className="canvas__image"
              style={{
                backgroundImage: `url(${imageSrc})`,
                transform: `translate(${imageX}px, ${imageY}px) scale(${scale})`,
              }}
            ></div>
          </ImageDragger>
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
