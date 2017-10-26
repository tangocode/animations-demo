import React from 'react';
import { Container, FormContainer, Form, FormAnimated, Fieldset, Label, Input, Button, ButtonText, ErrorContainer, ErrorText, Title, TitleBold } from './styles';

const Presenter = (props) => (
  <Container>
    <FormContainer>
      <Title>THE <TitleBold>MUSIC</TitleBold> SPOT</Title>
      {props.error && props.error.length > 0 &&
        <div>
          <ErrorContainer><ErrorText>{props.error}</ErrorText></ErrorContainer>
          <FormAnimated>
            <Fieldset>
              <Input id="username" name="username" type="text" autocomplete="off" placeholder="Enter your username." required value={props.username} onChange={(event) => props.handleUsernameChange(event.target.value)} />
              <Label for="username">Username</Label>
            </Fieldset>    
            <Fieldset>
              <Input id="password" name="password" type="password" autocomplete="off" placeholder="Enter your password." required value={props.password} onChange={(event) => props.handlePasswordChange(event.target.value)} />
              <Label for="password">Password</Label>
            </Fieldset>    
            <Button onClick={props.handleLoginClick}>
              <ButtonText>LOGIN</ButtonText>
            </Button>
          </FormAnimated>
        </div>
      }

      {(!props.error || props.error.length === 0) &&
        <Form>
          <Fieldset>
            <Input id="username" name="username" type="text" autocomplete="off" placeholder="Enter your username." required value={props.username} onChange={(event) => props.handleUsernameChange(event.target.value)} />
            <Label for="username">Username</Label>
          </Fieldset>    
          <Fieldset>
            <Input id="password" name="password" type="password" autocomplete="off" placeholder="Enter your password." required value={props.password} onChange={(event) => props.handlePasswordChange(event.target.value)} />
            <Label for="password">Password</Label>
          </Fieldset>    
          <Button onClick={props.handleLoginClick}>
            <ButtonText>LOGIN</ButtonText>
          </Button>
        </Form>        
      }
    </FormContainer>
  </Container>
);

export default Presenter;