import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    .edit {
      align-self: flex-end;
      margin-bottom: 20px;
      font-size: 13px;
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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        gap: 10px;
        grid-template-areas: "header body";

      .header {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1px 1px;
        grid-template-areas: "photo" "bio";

        grid-area: header;

        .photo{
          grid-area: photo;

          li {
            display: flex;
            flex-direction: column;

            footer {
              width: 200px;
              margin-top: -4px;
              flex: 1;
              background: rgba(255, 255, 255, 0.9);
              border: 1px solid #eee;
              padding: 15px 20px;
              text-align: left;
              border-radius: 0 0 5px 5px;
              cursor: default;


              strong {
                font-size: 16px;
                color: #333;
                }

              p {
                font-size: 14px;
                line-height: 20px;
                color: #888;
                margin-top: 5px;
              }
            }
          }
        }

        .bio {
          margin-top: 10px;
          width: 200px;
          grid-area: bio;
          display: flex;

          background: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          border-radius: 5px;
          height: 80px;

          label {
            border-radius: 5px 5px 0 0;
            padding: 0 5px;
            width: 100%;
            height: 35%;
            background: #999;
            font-size: 13px;
            font-weight: bolder;
            color: #333;

          }

          textarea {
            resize: none;
            padding: 10px;
            height: 100px;
            border: 0;
            background: transparent;
            color: #444;
            font-size: 14px;
            font-family: Roboto, sans-serif;
            cursor: default;

            &::placeholder {
              font-style: italic;
              font-size: 13px;
            }
          }



        }
      }

      .body {
        height: 100px;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        display: flex;
        flex-direction: column;

        .body-header{
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 25px;

          div{
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: default;

            label {
              color: #999;
              font-weight: bold;
              font-size: 16px;
              margin-top: 10px;
            }
          }
        }

        .body-feed {
          width: 100%;
          height: 120px;
          margin-top: 30px;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 4px;

          label {
            border-radius: 4px 4px 0 0;
            padding: 0 5px;
            background: #999;
            font-size: 13px;
            font-weight: bolder;
            color: #333;
          }

          textarea {
            resize: none;
            width: 100%;
            padding: 10px;
            height: 80px;
            border: 0;
            background: transparent;
            color: #444;
            font-size: 14px;
            font-family: Roboto, sans-serif;

            &::placeholder {
              font-style: italic;
              font-size: 13px;
            }
          }
        }
          button {
            align-self: flex-end;
            width: 20%;
            height: 40px;
            background: #d41717;
            font-weight: bold;
            font-size: 14px;
          }
      }



        hr {
          margin-top: 20px;
        }

      }
    }
  }

  button {
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
    height: 45px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${darken(0.7, '#fff')};
    }

`;
