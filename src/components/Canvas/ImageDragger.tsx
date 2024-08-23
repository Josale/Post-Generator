import React, { Component, ReactNode } from 'react'

interface ImageDraggerProps {
  onDrag: (x: number, y: number) => void;
	children: ReactNode;
}

interface ImageDraggerState {
  isDragging: boolean;
  startX: number;
  startY: number;
}

export default class ImageDragger extends Component<ImageDraggerProps, ImageDraggerState> {
  constructor(props: ImageDraggerProps) {
    super(props);
    this.state = {
      isDragging: false,
      startX: 0,
      startY: 0,
    };
  }

  handleMouseDown = (e: React.MouseEvent) => {
    this.setState({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
    });
  };

  handleMouseMove = (e: MouseEvent) => {
    const { isDragging, startX, startY } = this.state;
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      this.props.onDrag(deltaX, deltaY);

      this.setState({
        startX: e.clientX,
        startY: e.clientY,
      });
    }
  };

  handleMouseUp = () => {
    this.setState({ isDragging: false });
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        style={{ cursor: 'grab', width: '100%', height: '100%' }} >
        {this.props.children}
      </div>
    );
  }
}
