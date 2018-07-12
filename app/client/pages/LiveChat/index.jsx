import React, { Component } from 'react';

export default class LiveChat extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="lc-c-head">
          <h2>Get in touch</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Your name" />
            <input type="text" name="email" id="email" placeholder="Your email" />
            <input type="text" name="question" id="question" placeholder="Your question" />
            <input type="submit" name="message_btn" />
          </form>
        </div>
      </div>
    )
  }
}
