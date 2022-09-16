import React from 'react';

const BookMark = (props) => {
  console.log(props);
  return (
    <td>
      <button onClick={() => props.click(props.id)}>
        <i
          className={
            'bi btn-lg bi-bookmark' + (props.status ? '-heart-fill' : '')
          }
        ></i>
      </button>
    </td>
  );
};

export default BookMark;
