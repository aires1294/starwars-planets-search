import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


test('Testando app provider', () => {
  render(<App />);
  const name = screen.getByTestId('name-filter');
  const valueFilter = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  const comparisonFilter = screen.getByTestId('comparison-filter');
  const collumnFilter = screen.getByTestId('column-filter');

  expect(name).toBeInTheDocument();
  expect(collumnFilter).toBeInTheDocument();

  userEvent.selectOptions(collumnFilter, 'population');
  userEvent.selectOptions(comparisonFilter, 'maior que');
  userEvent.type(valueFilter, '20000');
  userEvent.click(buttonFilter);

  userEvent.selectOptions(collumnFilter, 'orbital_period');
  userEvent.selectOptions(comparisonFilter, 'menor que');
  userEvent.type(valueFilter, '20000');
  userEvent.click(buttonFilter);

  userEvent.selectOptions(collumnFilter, 'diameter');
  userEvent.selectOptions(comparisonFilter, 'igual a');
  userEvent.type(valueFilter, '20000');
  userEvent.click(buttonFilter);

  // userEvent.selectOptions(collumnFilter, 'rotation_period');
  // userEvent.selectOptions(collumnFilter, 'surface_water');
  
  

});
