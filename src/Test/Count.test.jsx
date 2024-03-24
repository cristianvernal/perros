import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Count from "../components/Count";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        message: {
          breed1: [],
          breed2: ["sub1", "sub2"],
          breed3: ["sub1"],
        },
      }),
  })
);

test("renders Count component with correct total counts", async () => {
  const { getByText } = render(<Count />);

  expect(getByText("Numero Total de Razas: 0")).toBeInTheDocument();
  expect(getByText("Numero Total de Sub-Razas: 0")).toBeInTheDocument();

  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  expect(getByText("Numero Total de Razas: 3")).toBeInTheDocument();
  expect(getByText("Numero Total de Sub-Razas: 3")).toBeInTheDocument();
});
