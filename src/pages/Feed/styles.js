import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components';
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
  div {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    padding-top: 10px;

    img {
      margin-left: 10px;
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }

    .textarea {
      padding-top: 0;
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 5px;
      height: 115px;

      div {
        display: grid;
        grid-template-columns: 1fr 6fr;


        textarea {
          resize: none;
          padding-top: 10px;
          padding-left: 15px;
          height: 70px;
          width: 95%;
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

      }

      footer {
        display: flex;
        flex-direction: column;

        .btn-lancar {
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

    ul {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;

      li {
        border-radius: 5px;
        background: #fff;
        margin-bottom: 15px;

        div {
          display: flex;
          flex-direction: column;

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

`;
