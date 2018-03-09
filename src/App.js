import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checking: 0,
      savings: 0,
      transfer: 0
    }
    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
  }

  handleDepositClick(e, amount, name) {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    }
    else {
      let amount = +amount;
      let newBalance = 0;
      if (name === 'Checking') {
        newBalance = +this.state.checking + amount
        this.setState({
          checking: newBalance
        })
      } else {
        newBalance = +this.state.savings + amount
        this.setState({
          savings: newBalance
        })
      }
    }
  }

  handleWithdrawClick(e, amount, name) {
    e.preventDefault();
    if (isNaN(amount)) {
      console.log("Not a number");
    }
    else {
      let amount = +amount;
      let newBalance = 0;
      if (name === 'Checking') {
        newBalance = +this.state.checking - amount
        this.setState({
          checking: newBalance
        })
      } else {
        newBalance = +this.state.savings - amount
        this.setState({
          savings: newBalance
        })
      }
    }
  }

  handleTransferClick() {
    const newTransferState = {}
    name === 'Checking' ? name = 'Savings' : name = 'Checking'
  }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name="Checking"
          balance={this.state.checking}
          transfer={this.state.transfer}
          handleDepositClick={this.handleDepositClick}
          handleWithdrawClick={this.handleWithdrawClick}
          handleTransferClick={this.handleTransferClick}
        />
        <Account name="Savings"
          balance={this.state.savings}
          transfer={this.state.transfer}
          handleDepositClick={this.handleDepositClick}
          handleWithdrawClick={this.handleWithdrawClick}
          handleTransferClick={this.handleTransferClick}
        />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
