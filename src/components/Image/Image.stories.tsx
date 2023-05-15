import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Image } from './Image';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('aaaa', () => (
    <Container row bordered rounded width={300}>
      <Image
        src={'https://source.unsplash.com/random/?bbq'}
        fullWidth={boolean('fullWidth', true)}
        width={number('width', 300)}
        aspectRatio={number('aspectRatio', 0.5)}
      />
    </Container>
  ));
