import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #e1e1e1;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.2);
        font-style: italic;
        font-size: 13px;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #d41717;
      border-radius: 4px;
      border: 0;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
      transition: background 0.5s;

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
        color: #999;
        opacity: 1;
      }
    }

    label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.2);
    }

    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #e1e1e1;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .options {
      display: inline-flex;
      margin-bottom: 10px;
      margin-left: 15px;
    }

    label {
        color: #999;
        font-size: 15px;
        font-weight: bold;
      }

    .radio {
      font-size: 13px;
      text-transform: capitalize;
      display: inline-block;
      vertical-align: middle;
      color: #999;
      font-weight: normal;
      cursor: pointer;
    }

    .radio + .radio {
      margin-left: 70px;
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
      right: 20px;
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
      margin-left: 17px;
    }

    .check {
      font-size: 13px;
      text-transform: capitalize;
      display: inline-block;
      vertical-align: middle;
      color: #999;
      font-weight: normal;
      cursor: pointer;
    }

    .check + .check {
      margin-left: 68px;
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
      right: 20px;
      bottom: 17px;
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
`;
