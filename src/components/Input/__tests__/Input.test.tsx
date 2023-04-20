import React from 'react';
import { Input, InputProps } from '..';
import { render } from '@testing-library/react';

const defaultProps: InputProps = {};

const setup = (props = defaultProps) => render(<Input {...props} />);

describe('Input', () => {
  it('renders', () => {
    setup({});
  });
});
