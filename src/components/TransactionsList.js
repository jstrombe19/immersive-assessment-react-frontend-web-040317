import React from 'react';

const TransactionsList = ({ searchTerm, filterTransactions, renderTransaction }) => {
  const transactionsList = filterTransactions(searchTerm).map(renderTransaction);
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {transactionsList}
      </tbody>
    </table>
  )
}

export default TransactionsList
