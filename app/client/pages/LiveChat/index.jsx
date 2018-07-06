import React from 'react';

export default () => {
  return (
    <div>
      <div className="lc-c-head">
        <h2>Get in touch</h2>
      </div>
      <div>
        <form>
          <input type="text" name="name" id="name" placeholder="Your name" />
          <input type="text" name="email" id="email" placeholder="Your email" />
          <input type="text" name="question" id="email" placeholder="Your question" />
          <input type="submit" name="message_btn" value="Send" />
        </form>
      </div>
    </div>
  )
}
