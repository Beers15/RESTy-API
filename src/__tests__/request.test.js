// // __tests__/fetch.test.js
// import React from 'react'
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// import '@testing-library/jest-dom'
// import Form from '../components/form';
// import Results from '../components/results'

// const server = setupServer(
//   rest.get('/', (req, res, ctx) => {
//     return res(ctx.json({}))
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('loads and displays greeting', async () => {
//   // let callback = jest.fn();
//   // render( <Form setRequestParams={callback} /> );
//   // render( <Results data={{}} loading={false}  /> );

//   // fireEvent.click(screen.getByText('GO!'))

//   // await waitFor(() => screen.getByRole('pre'))

//   // expect(screen.getByRole('pre')).toHaveTextContent('')
// })
