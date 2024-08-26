import React, { Component } from 'react'

interface TextInputProps {
  title: string;
  description: string;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
}

export default class TextInput extends Component<TextInputProps> {
  handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onTitleChange(e.target.value);
  };

  handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onDescriptionChange(e.target.value);
  };

  render() {
    const { title, description } = this.props;

    return (
      <div className="text-input">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} maxLength={40} onChange={this.handleTitleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} maxLength={60} onChange={this.handleDescriptionChange}/>
      </div>
    );
  }
}
