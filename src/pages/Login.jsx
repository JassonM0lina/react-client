import styled from 'styled-components';
import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={loginUser}>
          <Input type="text" name="username" placeholder="Enter Username" />
          <Input type="password" name="password" placeholder="Enter Password" />
          <Button type="submit">LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
