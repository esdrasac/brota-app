import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Notifications from '../Notifications'

import logo from '../../assets/logo4.png';
import { Container, Content, Profile } from './styles';


export default function Header() {
  const profile = useSelector(state => state.user.profile)

  const [firstName, setFirstName] = useState()

  useEffect(() => {
    async function loadName() {
      const firstName = profile.name.split(' ')[0]
      setFirstName(firstName)
    }


    loadName()
  }, [profile.name])

  return (
    <Container>
      <Content>
        <nav>
        <img className="logo" src={logo} alt="brotaApp" />
        <Link className="brota" to="/feed">FEED!</Link>
        <hr/>
        <Link className="brota" to="/dashboard">BROTÔMETRO!</Link>
        </nav>

        <aside>
          <Notifications/>
          <Profile>
            <div>
              <strong>{firstName}</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src={profile.avatar ? profile.avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'}
              alt="Esdras Aguilar"/>
          </Profile>
        </aside>

      </Content>
    </Container>
  );
}
