import React from 'react';
import { Head, HeadProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: HeadProps = {
  
};

const setup = (props = defaultProps) => render(<Head {...props} />);

describe('Head', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
