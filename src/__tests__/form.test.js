import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form';

describe('Testing the form component', () => {
  it('Should use our callback on submit', () => {
    let callback = jest.fn();
    let callback2 = jest.fn();

    render( <Form handleApiCall={callback} isLoading={callback2} /> );
    const button = screen.getByRole('button');

    fireEvent.click(button);
    
    //expect(callback).toBeCalled();
    expect(callback2).toBeCalled();
  });
});