import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    div {
      input {
        width: 48%
      }

      #name {
        margin-right: 4%;
      }
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 35px;
      padding: 0 15px;
      color: #e1e1e1;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
        font-style: italic;
        font-size: 13px;
      }
    }

    #email {
      color: rgba(255, 255, 255, 0.5);
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 5px 5px;
      grid-template-areas: "password sex-and-interest";
    }

    .password {
      grid-area: password;
      input {
        width: 100%;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 35px;
      background: #d41717;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#d41717')};
      }
    }

    a {
      color: #e1e1e1;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
      width: 100%;
      margin: 10px 0 0;
      height: 35px;
      background: ${darken(0.8, '#fff')};
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.7, '#fff')};
      }
    }
`;
