import * as React from 'react'
import { findDOMNode } from 'react-dom'

type Props = {
  width: number,
  height: number
}

class Canvas extends React.Component<Props> {
  constructor(props: Props) {
    super(props: Props)
    this.state = {
      mouseDown: false
    }
  }

  componentDidMount(){
    this.canvas = findDOMNode(this)
    this.context = this.canvas.getContext('2d')
    // this.context.fillStyle = 'red'
    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  render(){
    const getCursorPosition = e => {
      const {left, top} = this.canvas.getBoundingClientRect()

      return {
        x: e.clientX - left,
        y: e.clientY - top
      }
    }

    const distanceBetween = (point1, point2) => {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
    }

    const angleBetween = (point1, point2) => {
      return Math.atan2(point2.y - point1.y, point2.x -point1.x)
    }

    const onMouseDown = e => {
      const newMousePosition = getCursorPosition(e)
      this.setState({mouseDown:true, mousePosition: newMousePosition})
    }

    const onMouseUp = e => {      
      this.setState({mouseDown: false})
    }

    let onMouseOut = event => {
      event.preventDefault()
      this.setState({ mouseDown: false })
    }


    const onMouseMove = e => {
      const newMousePosition = getCursorPosition(e)

      if(this.state.mouseDown) {
        const oldMousePosition = this.state.mousePosition

        const dist = distanceBetween(oldMousePosition, newMousePosition)
        const angle = angleBetween(oldMousePosition, newMousePosition)

        for(let i=0; i < dist; i++){
          let x = oldMousePosition.x + Math.sin(angle) * i
          let y = oldMousePosition.y + Math.cos(angle) * i

          this.context.fillRect(x, y, 1, 1)
        }
      }
      this.setState({mousePosition: newMousePosition})
    }

    return (
      <canvas
        onMouseOut={onMouseOut}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        width={this.props.width}
        height={this.props.height}
        >
      </canvas>
    )
  }
}


export default Canvas
