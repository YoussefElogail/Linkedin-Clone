import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import signInAPI from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const {user} = useSelector((store)=> store.userState)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    user ? navigate("/home") : null
  },[user])
  return (
    <Container>
      
      <Nav>
        <a href="/index.html">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => {dispatch(signInAPI())}}>
            <img src="/images/google.svg" alt="" />
            <span>Sign in with Google</span>
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  cursor: pointer;
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: center;
  min-height: 700px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.article`
  width: 100%;
  text-align: center;
  h1 {
    text-align: start;
    position: relative;
    z-index: 1000;
    padding-bottom: 0;
    margin-top: 100px;
    width: 55%;
    font-size: 56px;
    color: #0a66c2;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    max-width: 600px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
margin-top: 100px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  align-items: center;
  height: 56px;
  width: 400px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;
