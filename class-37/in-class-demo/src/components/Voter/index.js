import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions';

const mapStateToProps = state => {
  return {
    candidates: state.candidates,
    totalVotes: state.totalVotes
  };
};

const mapDispatchToProps = { increment, decrement, reset };

const Voter = ({ candidates, totalVotes, increment, decrement, reset }) => {
  return (
    <section className="Voter">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
            <th>Vote For</th>
            <th>Vote Against</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(person => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.votes}</td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    increment(person.name);
                  }}
                >
                  <span role="img" aria-label="Vote For">
                    👍
                  </span>
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    decrement(person.name);
                  }}
                >
                  <span role="img" aria-label="Vote Against">
                    👎
                  </span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>Total Votes: {totalVotes}</div>
      <Button variant="primary" onClick={reset}>
        Reset
      </Button>
    </section>
  );
};

// Insted of exporting the component, we export it after it's been connected to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Voter);
