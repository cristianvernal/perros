// Count.test.jsx

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Count from './Count';

// Mock fetch para simular la llamada a la API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: { breed1: [], breed2: ['sub1', 'sub2'] } }),
  })
);

describe('Count Component', () => {
  test('renders total breeds and total sub-breeds', async () => {
    // Renderiza el componente
    render(<Count />);
    
    // Espera a que las llamadas asincrónicas se completen
    await waitFor(() => {
      // Verifica que se renderice el número total de razas y sub-razas
      expect(screen.getByText(/Numero Total de Razas: /)).toBeInTheDocument();
      expect(screen.getByText(/Numero Total de Sub-Razas: /)).toBeInTheDocument();
      
      // Verifica que se muestren los valores esperados (mocked)
      expect(screen.getByText(/Numero Total de Razas: 2/)).toBeInTheDocument();
      expect(screen.getByText(/Numero Total de Sub-Razas: 2/)).toBeInTheDocument();
    });
  });
});
