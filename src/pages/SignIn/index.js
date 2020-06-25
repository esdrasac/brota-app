import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';
import { loadFeedRequest } from '../../store/modules/feed/actions';

import logo from '../../assets/logo2.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Endereço de email inválido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    dispatch(loadFeedRequest())

  }
  return (
    <>
      <img src={logo} alt="brotaApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="********" />

        <button type="submit">{loading ? 'Entrando...' : 'Entrar'}</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
