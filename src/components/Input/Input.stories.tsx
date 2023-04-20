import React from 'react';
import { Container } from '../Container';
import { Input } from './Input';
import { boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Default = () => (
  <Container fullWidth>
    <Input fullWidth={boolean('fullWidth', false)} disabled={boolean('disabled', false)} />
  </Container>
);
