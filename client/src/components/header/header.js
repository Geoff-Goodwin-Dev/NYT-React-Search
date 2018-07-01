import React from 'react';
import './header.css';

const headerBar = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4"><u>New York Times Article Scrubber</u></h1>
      <p className="lead text-muted">Search for and Manage Saved Articles</p>
    </div>
  </div>
);

export default headerBar;
