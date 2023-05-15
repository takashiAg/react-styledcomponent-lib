import React from 'react';
import { Text, TextProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TextProps = {
  
};

const setup = (props = defaultProps) => render(<Text {...props} />);

describe('Text', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
