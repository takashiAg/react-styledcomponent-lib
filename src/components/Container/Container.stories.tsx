import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from './Container';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';

storiesOf('container', module)
  .addDecorator(withKnobs)
  .add('all', () => (
    <Container
      row={boolean('direction-row', false)}
      fullWidth={boolean('fullWidth', false)}
      height={number('height', 300)}
      width={number('width', 300)}
      align={select('align', ['left', 'center', 'right'], 'center')}
      justify={select('justify', ['start', 'center', 'end', 'between', 'around'], 'center')}
      bordered={boolean('bordered', true)}
      rounded={boolean('rounded', true)}
    >
      <Container bordered rounded />
      <Container bordered rounded />
      <Container bordered rounded />
    </Container>
  ))
  .add('flex-direction', () => (
    <Container fullWidth>
      <Container bordered rounded fullWidth>
        <Container bordered rounded fullWidth>
          column
        </Container>
        <Container bordered rounded fullWidth>
          column
        </Container>
      </Container>
      <Container bordered rounded row fullWidth>
        <Container bordered rounded fullWidth>
          row
        </Container>
        <Container bordered rounded fullWidth>
          row
        </Container>
      </Container>
    </Container>
  ))
  .add('align', () => (
    <Container>
      align left
      <Container rounded bordered fullWidth align='left'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      align center
      <Container rounded bordered fullWidth align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      align right
      <Container rounded bordered fullWidth align='right'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
    </Container>
  ))
  .add('justify', () => (
    <Container row>
      justify start
      <Container rounded bordered fullWidth height={500} justify='start' align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      justify center
      <Container rounded bordered fullWidth height={500} justify='center' align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      justify end
      <Container rounded bordered fullWidth height={500} justify='end' align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      justify between
      <Container rounded bordered fullWidth height={500} justify='between' align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
      justify around
      <Container rounded bordered fullWidth height={500} justify='around' align='center'>
        <Container bordered rounded />
        <Container bordered rounded />
        <Container bordered rounded />
      </Container>
    </Container>
  ));
