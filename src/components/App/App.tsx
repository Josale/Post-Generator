import React, { Component } from 'react'
import GenerateButton from '../../classes/GenerateButton'
import ImageScaler from '../../classes/ImageScaler'
import ImageUploader from '../../classes/ImageUploader'
import LogoSwitcher from '../../classes/LogoSwitcher'
import TextEditor from '../../classes/TextEditor'
import './App.scss'

export default class App extends Component {

  render(): React.ReactNode {
    return (
      <>
       <ImageUploader />
       <ImageScaler />
       <LogoSwitcher />
       <TextEditor />
       <GenerateButton />
      </>
    );
  }
}
