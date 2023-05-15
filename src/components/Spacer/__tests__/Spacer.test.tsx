import React from 'react';
import { Spacer, SpacerProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SpacerProps = {
  
};

const setup = (props = defaultProps) => render(<Spacer {...props} />);

describe('Spacer', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
