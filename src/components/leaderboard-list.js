import React from 'react';
import ListItem from './list-item';

const LeaderboardList = ({ campers }) => {

  const ListItems = campers.map((camper, index) => {
    return <ListItem key={index} camper={camper} rank={index + 1} />;
  });

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
      <tbody>{ListItems}</tbody>
    </table>
  );
}

export default LeaderboardList;
