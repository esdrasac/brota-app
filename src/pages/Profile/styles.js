import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { darken } from 'polished';

export const Scroll = styled(PerfectScrollbar)`
  max-height: 90%;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;

  width: 100%;
  text-align: center;
  align-content: center;
  align-self: center;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;

  form {
    display: flex;
    flex-direction: column;
    height: 400px;
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
              background: #fff;
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

              textarea {
                resize: none;
                height: 60px;
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
        }
      }

      .body {
        height: 150px;
        width: 100%;
        background: url("https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
        background-size: cover;
        border-radius: 4px;
        display: flex;
        flex-direction: column;

          .body-header{
            margin-top: 80px;
            height: 70px;
            border-radius: 0 0 4px 4px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            background: rgba(0, 0, 0, 0.6);
            grid-gap: 25px;

            div{
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: default;

              label {
                color: #f4f4f4;
                font-weight: bold;
                font-size: 16px;
                margin-top: 10px;
              }
            }

        }


        .body-feed {
          width: 100%;
          height: 150px;
          margin-top: 50px;
          padding: 15px 0 5px;
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 4px;

          textarea {
            resize: none;
            padding-top: 10px;
            padding-left: 15px;
            margin: 0 5% 0 5%;
            height: 70px;
            width: 90%;
            border: 0;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            color: #444;
            font-size: 14px;
            font-family: Roboto, sans-serif;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;


            &::placeholder {
              font-style: italic;
              font-size: 13px;
            }
          }

          footer {
            display: flex;
            flex-direction: column;

            .btn-lancar {
              width: 100%;
              margin-top: 5px;
              border: 0px;
              background: transparent;
              height: 25px;
              font-size: 15px;
              color: #333;

            &:hover {
              background: rgba(0, 0, 0, 0.1);
              transform: translateY(-1px);
              transition: all .2s;
              }
            }
          }
        }
      }



        hr {
          margin-top: 20px;
        }

      }
    }

    div {


      ul {
        width: 100%;
        display: flex;
        flex-direction: column;

        li {
          border-radius: 5px;
          padding-top: 10px;
          background: #fff;
          margin-bottom: 15px;

          div {
            display: flex;
            flex-direction: column;

            img {
              margin-left: 10px;
              height: 50px;
              width: 50px;
              border-radius: 50%;
            }

            header {
              display: grid;
              grid-template-columns: 1fr 6fr;

              a {
                color: #000;
                font-size: 14px;
                opacity: 0.8;

                &:hover {
                opacity: 1;
                }
              }

              strong {
                padding-top: 15px;
                text-align: start;
              }
            }

            p {
              margin: 10px 20px 0 20px;
              border-radius: 15px;
              padding-top: 10px;
              padding-bottom: 10px;
              background: rgba(0, 0, 0, 0.1);
            }

            div {
              display: grid;
              grid-template-columns: 1fr 1fr;

              a {
                font-size: 12px;
              }

            }

            hr {
              margin-top: 10px;
              align-self: center;
              width: 80%;
              border-color: rgba(0, 0, 0, 0.1);
            }

            footer {
              display: grid;
              grid-template-columns: 1fr 1fr;

              button {
                border: 0px;
                background: transparent;
                height: 30px;
                margin-bottom: 5px;

                &:hover {
                  background: rgba(0, 0, 0, 0.1);
                  transform: translateY(-1px);
                  transition: all .2s;
              }


            }

            }


            .content {
              grid-area: feed-content;
            }
          }

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
    border: 0;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${darken(0.7, '#fff')};
    }

`;
