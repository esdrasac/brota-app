import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    .edit {
      align-self: flex-end;
      margin-bottom: 15px;
      font-size: 13px;
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 35px;
      padding: 0 15px;
      color: #e1e1e1;
      margin: 0 0 10px;

      resize: none;
      padding: 10px;
      height: 80PX;
      border: 0;
      font-size: 14px;
      font-family: Roboto, sans-serif;
    }


    input {
      width: 48%;
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

    #name {
      margin-right: 4%;
    }

    #email {
      color: rgba(255, 255, 255, 0.5);
    }

    .profile-container  {
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 1fr 1fr 2fr;
      gap: 1px 1px;
      grid-template-areas: "label-name input-name" "label-email input-email" "label-bio input-bio";

      label {
        color: #999;
        font-size: 15px;
        font-weight: bold;
      }

      textarea {
        width: 100%;
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 35px;
        color: #e1e1e1;
        margin: 0 0 10px;

        resize: none;
        padding: 10px;
        height: 80PX;
        border: 0;
        font-size: 14px;
        font-family: Roboto, sans-serif;
    }

      input {
        width: 100%;
      }
    }

    .input-name { grid-area: input-name; }

    .input-email { grid-area: input-email; }

    .input-bio { grid-area: input-bio; }

    .label-name { grid-area: label-name; }

    .label-email { grid-area: label-email; }

    .label-bio { grid-area: label-bio; }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 20px;
      grid-template-areas: 'password sex-and-interest';
    }

    .password {
      grid-area: password;

      label {
        color: #999;
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: bold;
      }

      input {
        margin-top: 10px;
        width: 90%;
      }
    }


    .sex-and-interest {
      grid-area: sex-and-interest;
      padding: 0 0px;
      text-align: center;

      label {
        padding: 10px 22px;
        color: #999;
        font-size: 15px;
        font-weight: bold;
      }

      .radio-group {
        display: grid;
        grid-template-columns: 1fr 1fr;

        label {
          font-weight: normal;
        }
      }

      .radio {
        display: inline-block;
        vertical-align: middle;
        color: #999;
        cursor: pointer;
      }


      .radio input[type='radio'] {
        display: none;
      }

      .radio span {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        border: 1.5px solid #d41717;
        display: block;
        position: relative;
        bottom: 17px;
      }

      .radio span:after {
        content: '';
        height: 7px;
        width: 7px;
        background: #d41717;
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: 1s ease-ease-in-out 0s;
      }

      .radio input[type='radio']:checked ~ span:after {
        transform: translate(-50%, -50%) scale(1);
      }

      .check-group {
        display: grid;
        grid-template-columns: 1fr 1fr;

        label {
          font-weight: normal;
        }
      }

      .check input[type='checkbox'] {
        display: none;
      }

      .check span {
        height: 16px;
        width: 16px;
        border-radius: 20%;
        border: 1.5px solid #d41717;
        display: block;
        position: relative;
        bottom: 17px;
        cursor: pointer;
      }

      .check span:after {
        content: '';
        height: 7px;
        width: 7px;
        background: #d41717;
        display: block;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: 1s ease-ease-in-out 0s;
      }

      .check input[type='checkbox']:checked ~ span:after {
        transform: translate(-50%, -50%) scale(1);
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
    background: ${darken(0.7, '#fff')};
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
