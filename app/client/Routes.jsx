import { BrowserRouter as Router, Route } from 'react-router-dom';
import LiveChat from './pages/LiveChat';
import ChatRoom from './pages/ChatRoom';
import React from 'react';

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LiveChat} />
        <Route path="/join" component={ChatRoom} />
      </div>
    </Router>
  )
}
