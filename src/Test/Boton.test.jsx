import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Inicio from './Inicio';

test('clicking "Otra foto" button fetches and displays another image', async () => {
  const { getByText, getByAltText } = render(<Inicio />);
  
  // Mocking fetchRandomImage function
  const fetchRandomImageMock = jest.fn();
  global.fetchRandomImage = fetchRandomImageMock;
  
  // Simulate clicking on "Otra foto" button
  fireEvent.click(getByText('Otra foto'));

  // Assert that fetchRandomImage function is called
  await waitFor(() => {
    expect(fetchRandomImageMock).toHaveBeenCalledTimes(1);
  });

  // Assert that another image is displayed
  expect(getByAltText('Dog')).toBeInTheDocument();
});