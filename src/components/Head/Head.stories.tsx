import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Head } from './Head';
import { text, withKnobs } from '@storybook/addon-knobs';

storiesOf('Head', module)
  .addDecorator(withKnobs)
  .add('spacer', () => (
    <Container bordered rounded>
      <Head>{text('text', 'テキスト')}</Head>
      <Container bordered rounded fullWidth />
      <Container bordered rounded fullWidth />
    </Container>
  ));
