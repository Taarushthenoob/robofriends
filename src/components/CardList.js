import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return !robots.length ? (
    <h1 className="pa5 tc f1">Sorry! No results found.</h1>
  ) : (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            name={robots[i].name}
            email={robots[i].email}
            id={robots[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
