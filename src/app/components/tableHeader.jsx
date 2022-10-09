import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const addArrow = (item) => {
    if (item) {
      if (item === selectedSort.path && selectedSort.order === 'asc') {
        return <i className='bi bi-caret-up-fill'></i>;
      }
      if (item === selectedSort.path && selectedSort.order === 'desc') {
        return <i className='bi bi-caret-down-fill'></i>;
      }
    }
  };
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      });
    } else {
      onSort({ path: item, order: 'asc' });
    }
  };
  return (
    <thead>
      <tr className='table-primary'>
        {Object.keys(columns).map((column) => (
          <th
            className='px-2'
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && 'button' }}
            scope='col'
          >
            {columns[column].name}
            <div className='d-inline-flex ps-2'>
              {addArrow(columns[column].path)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableHeader;
