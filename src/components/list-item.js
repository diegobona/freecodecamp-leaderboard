import React from 'react';

const ListItem = ({ rank, camper }) => {

  return (
    <tr>
      <td>{rank}</td>
      <td>
        <img src={camper.img} alt={`profile picture for ${camper.username}`} />
        <a href={`https://www.freecodecamp.org/${camper.username}`} target="_blank">{camper.username}</a>
      </td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
}

export default ListItem;
