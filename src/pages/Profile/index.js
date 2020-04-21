import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput';
import heart from '../../assets/coracao.svg'
import grafic from '../../assets/grafico.svg'

import { Container } from './styles';

export default function Profile() {
  const dispathc = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispathc(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispathc(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Link className="edit" to="/edit-profile">
          <u>Editar</u>
        </Link>
        <div>
          <div className="header">
            <div className="photo">
            <li>
              <AvatarInput name="avatar_id" />
                <footer>
                  <strong>{profile.name}</strong>
                  <p>{profile.campus}</p>
                </footer>
            </li>
            </div>
            <div className="bio">
              <label htmlFor="bio">Sobre</label>
              <textarea
                name="bio"
                value={profile.bio || ''}
                rows="3"
                readOnly="true"
                placeholder="> No que você está pensando?"
                maxLength="180"></textarea>
            </div>
          </div>
          <div className="body">
            <div className='body-header'>
              <div>
                <h1>💕</h1>
                <label>48</label>
              </div>
              <div>
                <h1>👥</h1>
                <label>54</label>
              </div>
              <div>
                <h1>👀</h1>
                <label>16</label>
              </div>
            </div>

            <div className="body-feed">
              <label htmlFor="feed">Lança a braba!</label>
              <Textarea name="input-feed" placeholder="Quê que ta pegando?"/>
            </div>
            <button type="button">Lançar</button>

          </div>

        </div>

        <hr />
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Brota!
      </button>
    </Container>
  );
}
