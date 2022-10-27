import React, { useContext } from 'react';
import AppContext from '../context/appContext';

export default function Forms() {
  const {
    name,
    handleName,
    column,
    columnFilter,
    handleColumnFilter,
    comparisonFilter,
    handleComparisonFilter,
    handleFilter,
    valueFilter,
    handleValue,
  } = useContext(AppContext);
  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleName }
      />
      Planet Name
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          name="columnFilter"
          id="column-filter"
          value={ columnFilter }
          onChange={ handleColumnFilter }
        >
          {column.map((e, index) => (
            <option key={ index } value={ e }>
              {e}
            </option>
          ))}
        </select>
      </label>
      Column Filter
      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonFilter"
          value={ comparisonFilter }
          onChange={ handleComparisonFilter }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      Comparison Filter
      <input
        data-testid="value-filter"
        type="number"
        value={ valueFilter }
        onChange={ handleValue }
      />
      <button type="button" data-testid="button-filter" onClick={ handleFilter }>
        Button Filter
      </button>
    </form>
  );
}
