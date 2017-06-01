//@flow

import React from 'react'
import { findDOMNode } from 'react-dom'

type Props = {
  width: number,
  height: number
}

class Canvas extends React.Component<Props> {
  props: Props

  componentDidMount(){
    this.canvas = findDOMNode(this)
    this.context = this.canvas.getContext('2d')
    this.context.fillStyle = 'red'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  render(){
    return (
      <canvas
        { ...this.props }
        >
      </canvas>
    )
  }
}


export default Canvas
