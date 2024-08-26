import html2canvas from 'html2canvas'
import React, { Component } from 'react'

interface ScreenshotButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

export default class ScreenshotButton extends Component<ScreenshotButtonProps> {
  handleScreenshot = async () => {
    const { targetRef } = this.props;
    if (targetRef.current) {
      const canvas = await html2canvas(targetRef.current);
      const dataUrl = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'canvas_screenshot.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  render() {
    return (
      <button onClick={this.handleScreenshot} className="screenshot-button">
        Generate
      </button>
    );
  }
}