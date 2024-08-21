import React, { Component } from 'react'

interface LogoSwitchProps {
  showLogo: boolean;
  onChange: (checked: boolean) => void;
}

export default class LogoSwitch extends Component<LogoSwitchProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.checked);
  };

  render() {
    const { showLogo } = this.props;

    return (
      <div className="logo-switch">
        <label htmlFor="logo">Show Logo:</label>
        <input type="checkbox" id="logo" checked={showLogo} onChange={this.handleChange} />
      </div>
    );
  }
}
