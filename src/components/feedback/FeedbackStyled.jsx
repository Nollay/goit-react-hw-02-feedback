import { default as styled } from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 20px;
  width: 480px;
`;
export const HeadContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 15px;
  padding: 8px;
  border-radius: 5px;
  margin-right: 10px;
  :hover,
  :focus {
    background-color: #0c92b7;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerButtonn = styled.div`
  display: flex;
  justify-content: space-around;
`;
