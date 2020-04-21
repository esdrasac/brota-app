import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 0px;

  label {
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 200px;
      width: 200px;
      border-radius: 5px 5px 0px 0;
      background: #eee;
    }


    input {
      display: none;
    }
  }
`;
