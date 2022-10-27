// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from '../App';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

// test('Testando os itens da coluna', () => {
//   render(<App />);
//   const name = screen.getByText(/Name/i);
//   const rotationPeriod = screen.getByText(/Rotation Period/i);
//   const orbitalPeriod = screen.getByText(/Orbitation Period/i);
//   const diameter = screen.getByText(/Diameter/i);
//   const climate = screen.getByText(/Climate/i)



//   expect(name).toBeInTheDocument();
//   expect(rotationPeriod).toBeInTheDocument();
//   expect(orbitalPeriod).toBeInTheDocument();
//   expect(diameter).toBeInTheDocument();
//   expect(climate).toBeInTheDocument();
// });


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
  userEvent.selectOptions(comparisonFilter, 'menor que');
  userEvent.selectOptions(comparisonFilter, 'igual a');
  userEvent.type(valueFilter, '20000');
  userEvent.click(buttonFilter);


});
