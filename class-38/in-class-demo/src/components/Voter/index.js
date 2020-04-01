import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = state => {
  return {
    candidates: state.candidates,
    totalVotes: state.totalVotes
  };
};

const mapDispatchToProps = {
  fetchAllCandidates: actions.fetchAllCandidates,
  increment: actions.increment,
  decrement: actions.decrement
};

const Voter = ({
  fetchAllCandidates,
  candidates,
  totalVotes,
  increment,
  decrement
}) => {
  const fetchData = () => {
    fetchAllCandidates();
  };
  useEffect(() => fetchData(), []); //eslint-disable-line
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
      <Button variant="primary" onClick={fetchAllCandidates}>
        Reset
      </Button>
    </section>
  );
};

// Insted of exporting the component, we export it after it's been connected to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Voter);
