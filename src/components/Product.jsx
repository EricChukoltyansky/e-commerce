import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      // <div>
      //   <h1>{this.props.text}</h1>
      //   <img src={this.props.src} alt="" />
      //   <p>{this.props.price}</p>
      //   <p>{this.props.size}</p>
      // </div>
      <div class="ui card">
        <p class="image">
          <img src={this.props.src} alt="" />
        </p>
        <div class="content">
          <p class="header">{this.props.text}</p>
          <div class="meta">
            <p>{this.props.price}</p>
            <p>{this.props.size}</p>
          </div>
        </div>
      </div>
    );
  }
}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EricChukoltyansky/e-commerce.git
// git push -u origin main