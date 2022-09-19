import React from 'react';

const BookMark = (props) => {
  return (
    <td>
      <button className="icon_center" onClick={() => props.click(props.id)}>
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
