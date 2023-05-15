import React from 'react';
import { Image, ImageProps } from '..';
import { render } from '@testing-library/react';

const defaultProps: ImageProps = {
  src: 'https://source.unsplash.com/random/?bbq',
};

const setup = (props = defaultProps) => render(<Image {...props} />);

describe('Image', () => {
  it('renders', () => {
    setup({
      src: 'https://source.unsplash.com/random/?bbq',
    });
    // expect(screen.getByText('foo'));
  });
});
