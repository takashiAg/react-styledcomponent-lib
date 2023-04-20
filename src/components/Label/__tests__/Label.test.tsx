import React from 'react';
import { Label, LabelProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: LabelProps = {
  
};

const setup = (props = defaultProps) => render(<Label {...props} />);

describe('Label', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
