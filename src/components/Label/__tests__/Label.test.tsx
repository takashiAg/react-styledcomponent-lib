import React from 'react';
import { Label, LabelProps } from '..';
import { render } from '@testing-library/react';

const defaultProps: LabelProps = {
  label: 'ラベル',
};

const setup = (props = defaultProps) => render(<Label {...props} />);

describe('Label', () => {
  it('renders', () => {
    setup({ label: 'foo' });
    // const t = expect(screen.getComputedRole('label'));
    // console.log(t);
  });
});
