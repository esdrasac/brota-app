import React, { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signOut } from '../../../store/modules/auth/actions';
import { updateProfileRequest } from '../../../store/modules/user/actions';

import AvatarInput from '../AvatarInput';

import { Container } from './styles';
import { signIn } from '../../../store/modules/auth/sagas';

export default function Profile() {
  const dispathc = useDispatch();
  const [male_interest, setMaleState] = useState(false);
  const [female_interest, setFemaleState] = useState(false);

  const [sexState, setSexState] = useState('M')
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispathc(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispathc(signOut());
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
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Link className="edit" to="/profile">
          <u>Voltar</u>
        </Link>

        <div className="profile-container">
          <div className="label-name">
            <label>Nome: </label>
          </div>
          <div className="input-name">
            <Input name="name"/>
          </div>
          <div className="label-email">
            <label>Email: </label>
          </div>
          <div className="input-email">
            <Input type="email" name="email" readOnly="true"/>
          </div>
          <div className="label-bio">
            <label>Biografia: </label>
          </div>
          <div className="input-bio">
            <Textarea name="bio" defaultValue={profile.bio} placeholder="Fale um pouco sobre você" maxLength="80"/>
          </div>

        </div>
        <hr />

        <div className="grid-container">

          <div className="password">
          <label>Mudar senha:</label>
            <Input
              type="password"
              name="oldPassword"
              placeholder="Sua Senha Atual"
            />
            <Input type="password" name="password" placeholder="Nova senha" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua nova senha"
            />
          </div>
          <div className="sex-and-interest">
            <label>Me considero:</label>
            <div className="radio-group">
              <label className="radio">
                <Input
                  className="radio-button"
                  type="radio"
                  value={sexState}
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
                  value={sexState}
                  onChange={handleSelectSex}
                  name="sex"
                />
                Mulher
                <span></span>
              </label>
            </div>
            <hr />
            <label>Me interesso por:</label>
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
        </div>
      </div>

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Brota!
      </button>
    </Container>
  );
}
