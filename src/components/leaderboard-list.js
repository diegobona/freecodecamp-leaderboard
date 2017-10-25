import React from 'react';
import ListItem from './list-item';

const LeaderboardList = ({ campers }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Camper</th>
          <th>30 Days</th>
          <th>All Time</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default LeaderboardList;
