import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    const { startDrawing, stopDrawing } = {...this.props};
    this.canvas = ReactDom.findDOMNode(this);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = '#BADA55';
    // this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 100;


    this.canvas.addEventListener('mousedown', e => {
      startDrawing(e.offsetX, e.offsetY);
    });

    this.canvas.addEventListener('mousemove', this.draw);
    this.canvas.addEventListener('mouseup', stopDrawing);
    this.canvas.addEventListener('mouseout', stopDrawing);
  }

  draw(e) {
    const {
      isDrawing, lastX, lastY, hue, direction,
      mouseMove, toggleDirection
    } = {...this.props} ;

    if(!isDrawing) return;
    mouseMove(e.offsetX, e.offsetY);

    this.ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    this.ctx.beginPath();
    this.ctx.moveTo(lastX, lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();


    if(direction) {
      this.ctx.lineWidth++;
    } else {
      this.ctx.lineWidth--;
    }

    if(this.ctx.lineWidth === 101 || this.ctx.lineWidth === 10) {
     toggleDirection();
    }

  }

  render() {
    return <canvas id="draw" width="800" height="800"></canvas>
  }
}

export default Canvas;

