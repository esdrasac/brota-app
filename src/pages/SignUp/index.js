import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo2.png';

import { sigUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email('Endereço de email inválido')
    .required('O email é obrigatório'),
  sex: Yup.string().required('*'),
  male_interest: Yup.boolean().required('*'),
  female_interest: Yup.boolean().required('*'),
  password: Yup.string()
    .required('A senha obrigatória')
    .min(6, 'Sua senha deve ter no mínimo 6 caracteres'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const [male_interest, setMaleState] = useState(false);
  const [female_interest, setFemaleState] = useState(false);

  const [sexState, setSexState] = useState('M')

  function handleSubmit({
    name,
    email,
    male_interest,
    female_interest,
    password,
    confirmPassword,
  }) {
    dispatch(
      sigUpRequest(
        name,
        email,
        sexState,
        male_interest,
        female_interest,
        password,
        confirmPassword
      )
    );
  }

  function handleSelectSex(e) {
    setSexState(e.target.value);
  }

  function handleCheckBoxChangeMale(e) {
    setMaleState(!male_interest);
  }

  function handleCheckBoxChangeFemale(e) {
    setFemaleState(!female_interest);
  }

  return (
    <>
      <img src={logo} alt="brotaApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Fulano de tal" />
        <Input name="email" type="email" placeholder="example@pucminas.br" />
        <div className="options">
          <label>Me considero: </label>
        </div>
        <div className="radio-group">
          <label className="radio">
            <Input
              className="radio-button"
              type="radio"
              value="M"
              onChange={handleSelectSex}
              name="sex"
            />
            Homem
            <span></span>
          </label>
          <label className="radio">
            <Input
              className="radio-button"
              type="radio"
              value="F"
              onChange={handleSelectSex}
              name="sex"
            />
            Mulher
            <span></span>
          </label>
        </div>

        <div className="options">
          <label>Me interesso por: </label>
        </div>
        <div className="check-group">
          <label className="check">
            <Input
              className="radio-button"
              type="checkbox"
              value={male_interest}
              onChange={handleCheckBoxChangeMale}
              name="male_interest"
            />
            Homens
            <span></span>
          </label>
          <label className="check">
            <Input
              className="radio-button"
              type="checkbox"
              value={female_interest}
              onChange={handleCheckBoxChangeFemale}
              name="female_interest"
            />
            Mulheres
            <span></span>
          </label>
        </div>
        <Input name="password" type="password" placeholder="********" />
        <Input name="confirmPassword" type="password" placeholder="********" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
