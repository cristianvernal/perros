import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Inicio from '../pages/Inicio';

test('Al hacer clic en el botón "Otra foto", se busca y muestra otra imagen.', async () => {
  const { getByText, getByAltText } = render(<Inicio />);
  
 
  const fetchRandomImageMock = jest.fn();
  global.fetchRandomImage = fetchRandomImageMock;
  

  fireEvent.click(getByText('Otra foto'));

  await waitFor(() => {
    expect(fetchRandomImageMock).toHaveBeenCalledTimes(1);
  });


  expect(getByAltText('Dog')).toBeInTheDocument();
});