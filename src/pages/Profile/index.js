import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { signOut } from '../../store/modules/auth/actions'
import { updateProfileRequest } from '../../store/modules/user/actions'

import AvatarInput from './AvatarInput'

import { Container } from './styles';
import { signIn } from '../../store/modules/auth/sagas';

export default function Profile() {
  const dispathc = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data){
    dispathc(updateProfileRequest(data))
  }

  function handleSignOut(){
    dispathc(signOut())
  }

  return <Container>
    <Form initialData={profile} onSubmit={handleSubmit}>
      <AvatarInput name="avatar_id"/>
      <Input name="bio" placeholder="Fale um pouco sobre você"/>

      <div>
        <Input name="name" placeholder="Nome Completo"/>
        <Input name="email" type="email"
          readOnly
          placeholder="Seu endereço de e-mail"/>
      </div>
      <hr/>
      <div className="grid-container">
        <div className="password">
          <Input type="password" name="oldPassword" placeholder="Sua Senha Atual"/>
          <Input type="password" name="password" placeholder="Nova senha"/>
          <Input type="password" name="confirmPassword" placeholder="Confirme sua nova senha"/>
        </div>
        <div className="sex-and-interest">
        </div>
      </div>


      <button type="submit">Atualizar perfil</button>
    </Form>

    <button type="button"onClick={handleSignOut}>Sair do Brota!</button>
  </Container>
}
