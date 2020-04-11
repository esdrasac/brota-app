import React from 'react';
import ProtoTypes from 'prop-types';


import Header from '../../../components/Header'

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>
      <Header/>
      {children}
    </Wrapper>;
}

DefaultLayout.prototypes = {
  children: ProtoTypes.element.isRequired,
};
