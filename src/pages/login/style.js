import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 200px;
  background: #fff;
  margin: 100px auto;
  padding-top: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%); ;
`;
export const Input = styled.input`
  display: block;
  width: 280px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background: #fff;
  color: #777;
  border-radius: 4px;
  margin: 10px auto;
`;
export const Button = styled.div`
  width: 280px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  padding: 0 10px;
  margin: 30px auto;
  background: #3194d0;
  color: #777;
  text-align: center;
  cursor: pointer;
`;
