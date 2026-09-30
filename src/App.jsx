import { Component, useState } from 'react'

import StickerList from './components/StickerList/StickerList'
import './App.css'
import Choice from './components/Choice/Choice'
import stickers from "./stickers.json"



class App extends Component{
  state = {
    nameSticker: ""
  }

  handleClick=(text) => {
    this.setState(
      {
        nameSticker: text
      }
    )
  }
render() {
  return(
    <>
    <StickerList data={stickers} onName={this.handleClick}/>
     <Choice name={this.state.nameSticker}/>
    </>
  )
}
}

export default App;
