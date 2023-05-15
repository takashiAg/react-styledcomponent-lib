import React from 'react';
import { Dialog, DialogProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: DialogProps = {
  
};

const setup = (props = defaultProps) => render(<Dialog {...props} />);

describe('Dialog', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
