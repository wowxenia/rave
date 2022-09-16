import React from 'react';

const Qualitie = ({ qualities }) => {
  return (
    <td>
      {qualities.map((item) => (
        <span className={'badge m-1 bg-' + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </td>
  );
};

export default Qualitie;
