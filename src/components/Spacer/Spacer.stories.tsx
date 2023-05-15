import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Spacer } from './Spacer';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('spacer', module)
  .addDecorator(withKnobs)
  .add('spacer', () => (
    <Container row bordered rounded>
      <Container bordered rounded />
      <Spacer />
      <Container bordered rounded />
    </Container>
  ));
