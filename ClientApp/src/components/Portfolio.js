import React, { Component } from 'react';

export class Portfolio extends Component {
  static displayName = Portfolio.name;

  constructor(props) {
    super(props);
    this.state = { positions: [], loading: true };
  }

  componentDidMount() {
    this.populatePortfolio();
  }

  static renderPositionsTable(positions) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Actions()</th>
            <th>Quantity</th>
            <th>Buy Date</th>
            <th>Buy Price</th>
            <th>Cost Basis</th>
            <th>Value</th>
            <th>Gain(Loss)</th>
          </tr>
        </thead>
        <tbody>
          {positions.map(position =>
            <tr key={position.ticker}>
              <td>{position.ticker}</td>
              <td>{position.actions}</td>
              <td>{position.quantity}</td>
              <td>{position.buyDate}</td>
              <td>{position.buyPrice}</td>
              <td>{position.costBasis}</td>
              <td>{position.currentValue}</td>
              <td>{position.unrealizedGainLoss}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Portfolio.renderPositionsTable(this.state.positions);

    return (
      <div>
        <h1 id="tableLabel">Your Portfolio</h1>
        {contents}
      </div>
    );
  }

  async populatePortfolio() {
    const response = await fetch('portfolio');
    const data = await response.json();
    this.setState({ positions: data, loading: false });
  }
}
