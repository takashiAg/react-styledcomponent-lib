import React from 'react';
import { Container } from '../Container';
import { Label } from './Label';
import { Input } from '../Input';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Label',
  component: Label,
  decorators: [withKnobs],
};

export const Default = () => (
  <Container fullWidth>
    <Label label={text('label', 'ラベル')} fullWidth={boolean('fullWidth', false)}>
      <Input fullWidth />
    </Label>
  </Container>
);
