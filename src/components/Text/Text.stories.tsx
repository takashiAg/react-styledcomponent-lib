import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Text } from './Text';
import { text, withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('spacer', () => (
    <Container row bordered rounded>
      <Text align={select('align', ['left', 'center', 'right'], 'left')}>
        {text('text', 'テキスト')}
      </Text>
    </Container>
  ));
