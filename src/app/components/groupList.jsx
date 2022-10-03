import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  let newItems;
  if (Array.isArray(items)) {
    newItems = items.map((item) => {
      return (
        <li
          key={item._id}
          className={
            'list-group-item' + (item === selectedItem ? ' active' : '')
          }
          onClick={() => onItemSelect(item)}
          role='button'
        >
          {item.name}
        </li>
      );
    });
  } else {
    newItems = Object.keys(items).map((item) => (
      <li
        key={items[item][valueProperty]}
        className={
          'list-group-item' + (items[item] === selectedItem ? ' active' : '')
        }
        onClick={() => onItemSelect(items[item])}
        role='button'
      >
        {items[item][contentProperty]}
      </li>
    ));
  }
  return <ul className='list-group'>{newItems}</ul>;
};

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};

export default GroupList;
