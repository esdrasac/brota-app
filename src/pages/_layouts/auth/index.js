import React from 'react';
import ProtoTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.prototypes = {
  children: ProtoTypes.element.isRequired,
};
