import React, { Component } from "react";
import "./CompletionStatus.scss";

class CompletionStatus extends Component {
  constructor() {
    super();
    this.state = {
      completedNumber: 0,
      totalNumber: 0,
    };
  }
  render() {
    const { completedNumber, totalNumber } = this.state;
    return (
      <div className="completion-status">
        <strong>{completedNumber}</strong> of
        <strong> {totalNumber}</strong> remaining [<span>archive</span>]
      </div>
    );
  }
}

export default CompletionStatus;
