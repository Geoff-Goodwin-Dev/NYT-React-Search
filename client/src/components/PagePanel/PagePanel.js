import React from 'react';
import './PagePanel.css';

const PagePanel = props => (
  <div className="row">
    <div className="col-sm-12">
      <br />
      <div className="card card-primary text-left">
        <h3 className="card-header">{props.sectionTitle}</h3>
        <div className="card-body">
          {props.children}
        </div>
      </div>
    </div>
  </div>
);

export default PagePanel;
