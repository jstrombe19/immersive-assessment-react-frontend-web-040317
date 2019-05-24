import React, { Component } from 'react';
import TransactionsList from './TransactionsList.js';
import Search from './Search.js';
import Transaction from './Transaction.js';

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
    };
  }

  async componentDidMount() {
    try{
      const response = await fetch('https://boiling-brook-94902.herokuapp.com/transactions');
      const transactions = await response.json();
      this.setState({ transactions });
    }
    catch(error) {
      console.error(error.message);
    }
  }

  updateSearchState = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  filterTransactions = (searchTerm) => {
    const { transactions } = this.state;
    const filteredTransactions = transactions.filter(transaction => {
      return(
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filteredTransactions;
  }

  renderTransaction = (transaction) => {
    return (
      <Transaction
        key={transaction.id + Date.now()}
        {...transaction}
      />
    );
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <Search
          updateSearchState={this.updateSearchState}
        />
        <TransactionsList
          filterTransactions={this.filterTransactions}
          searchTerm={searchTerm}
          renderTransaction={this.renderTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer
