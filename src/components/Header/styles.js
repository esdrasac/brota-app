import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #222;
  padding: 0 30px;
  z-index: 10;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    hr {
      margin-left: 10px;
      margin-right: 10px;
    }

    img {
      height: 60px;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #999;
    }

    a {
      font-weight: bold;
      font-size: 13px;
      color: #999;

    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #999;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #999;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #666;
    }


  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
