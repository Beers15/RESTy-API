import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../components/results';

describe('testing the results component', () => {
  it('should render the appropriate text when app is in a loading state', () => {
    render(<Results data={{}} loading={true} />);
    
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent('LOADING...');
  });
  it('should render the appropriate text when passed valid object data', () => {

    let dataProp = 'Results:HEADERS"root":{}0 itemsDATA"root":{2 items"foo":int123"bar":string"abc"}';
    let data = {data: {foo: 123, bar: "abc"} }

    render(<Results data={data} loading={false} />);
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataProp);
  });
});