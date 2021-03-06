import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props => props.hasUnread && css `
  &::after {
    position: absolute;
    right: 0;
    top: 0;
    width: 8px;
    height: 8px;
    background: #d41717;
    content: '';
    border-radius: 50%;
  }
  `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  z-index: 4;
  background: #2e2e2e;
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(42%);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #2e2e2e

  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1)
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.4;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.15, '#d41717')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1)
  }

  ${props =>
    props.unread && css`
      &::after {
        content:'';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #d41717;
        border-radius: 50%
    }
  `}
`;
