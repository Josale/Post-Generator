import React, { Component } from 'react'

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
}

export default class TextInput extends Component<TextInputProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onTextChange(e.target.value);
  };

  render() {
    const { text } = this.props;

    return (
      <div className="text-input">
        <label htmlFor="text">Text:</label>
        <input type="text" id="text" value={text} onChange={this.handleChange} />
      </div>
    );
  }
}
