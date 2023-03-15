import React from 'react';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (!query) {
      alert('Write your query');
    }
    onSubmit(query);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search movies" />
      <button type="submit">Search</button>
    </form>
  );
};
