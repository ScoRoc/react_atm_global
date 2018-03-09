import React, { Component } from 'react';

export default class Account extends Component {

  render() {

    const total = parseInt(this.props.balance) + parseInt(this.props.transfer)

    let balanceClass = 'balance';
    if (total === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${total}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.props.handleDepositClick(e, this.refs.amount.value, this.props.name)} />
        <input type="button" value="Withdraw" onClick={(e) => this.props.handleWithdrawClick(e, this.refs.amount.value, this.props.name)} />
        <input type="button" value="Transfer" onClick={() => this.handleTransferClick(this.refs.amount.value, this.props.name)} />
      </div>
    )
  }
}
