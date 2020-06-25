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
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;


    ul {
      margin-top: 50px;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {

        display: flex;
        flex-direction: column;
        width: 250px;

        .photo {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: center;

          border-radius: 5px 5px 0 0;
        }

        footer {
          flex: 1;
          background: #fff;
          border: 1px solid #eee;
          padding: 15px 20px;
          text-align: left;
          border-radius: 0 0 5px 5px;

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
        div {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;

          button {
            height: 45px;
            box-shadow: 0 2px 2px 0 rgba( 0, 0, 0, 0.5);
            border: 0;
            border-radius: 4px;
            background: #fff;
            cursor: pointer;

            img {
              margin-top: 4px;
              max-height: 80%
              }
            }

          button:hover img {
            transform: translateY(-2px);
            transition: all .2s;

          }
          }
      }
    }

    .empty {
      font-size: 32px;
      color: #999;
      font-weight: bold;
      margin-top: 250px;
    }
  }
`;
