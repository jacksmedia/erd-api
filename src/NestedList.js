import React from 'react';

const renderNestedList = (data, depth = 0) => {
  if (typeof data !== 'object' || data === null) {
    return <li key={depth}>{data}</li>;
  }

  return (
    <li key={depth}>
      {Array.isArray(data)
        ? <ul>{data.map((item, index) => renderNestedList(item, index))}</ul>
        : <ul>{Object.entries(data).map(([key, value]) => (
            <React.Fragment key={key}>
              <li>{key}: {renderNestedList(value, key)}</li>
            </React.Fragment>
          ))}
        </ul>
      }
    </li>
  );
};

const NestedList = ({ data }) => {
  return (
    <ul>
      {renderNestedList(data)}
    </ul>
  );
};

export default NestedList;