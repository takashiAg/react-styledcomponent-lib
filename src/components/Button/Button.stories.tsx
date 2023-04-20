import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../Container';
import { Button } from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

// export default {
//   title: 'Button',
//   component: Button,
//   decorators: [withKnobs],
// };

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Container fullWidth>
      <Button
        color={select('color', ['primary', 'secondary', 'info', 'default'], 'default')}
        fullWidth={boolean('fullWidth', false)}
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        loading={boolean('loading', false)}
        disabled={boolean('disabled', false)}
      >
        {text('text', 'Hello Storybook')}
      </Button>
    </Container>
  ))
  .add('color', () => (
    <Container fullWidth>
      <Button color='primary' fullWidth>
        color=primary
      </Button>
      <Button color='secondary' fullWidth>
        color=secondary
      </Button>
      <Button color='info' fullWidth>
        color=info
      </Button>
      <Button color='default' fullWidth>
        color=default
      </Button>
    </Container>
  ))
  .add('size', () => (
    <Container fullWidth>
      <Button size='small'>size='small'</Button>
      <Button size='medium'>size='midium'</Button>
      <Button size='large'>size='large'</Button>
    </Container>
  ))
  .add('other', () => (
    <Container fullWidth>
      <Button loading>loading</Button>
      <Button disabled>disabled</Button>
    </Container>
  ));
