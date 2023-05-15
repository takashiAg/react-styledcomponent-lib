import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Dialog } from './Dialog';
import { Text } from '../Text';
import { Head } from '../Head';
import { Button } from '../Button';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('Dialog', module)
  .addDecorator(withKnobs)
  .add('spacer', () => (
    <Container row bordered rounded>
      <Dialog open={boolean('open', true)}>
        <Head>{text('head', 'こんにちは')}</Head>
        <Text>{text('text', '開きます。')}</Text>
        <Button>ボタンです</Button>
      </Dialog>
    </Container>
  ));
