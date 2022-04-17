import React from 'react';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';

export const FilterField = ({ value, onChange }) => {
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterContainer>
  );
};
