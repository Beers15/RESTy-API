import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../components/results';

// setup our mocked API endpoints
const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [{ "headers": {}, "data": {} }]
      })
    )
  }),
);

// listen for requests from our mocked server
beforeAll(() => {
  server.listen();
});

describe('Testing the results component', () => {
  it('should display results from an api call', async () => {

    // should render something
    render(<Results data={{ "headers": {}, "data": {} }} />);

    // what is rendered should include and elements with the test id = 'results'
    await waitFor( () => {
      screen.getByTestId('result-data');
    });

    // results should be present
    expect(screen.getByTestId('result-data')).toBeInTheDocument();
  });
});