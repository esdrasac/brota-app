import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import {useSelector} from 'react-redux'

import api from '../../services/api'

import like from '../../assets/sucesso.svg'
import dislike from '../../assets/cruz.svg'
import photoDefault from '../../assets/photo-default.png'

import { Container, Scroll} from './styles';

export default function Dashboard() {
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.user.profile);


  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadDashboard() {
      const response = await api.get('user')
      setUsers(response.data)
    }


    loadDashboard()
  }, [])

  useEffect(() => {
    const socket = io('http://localhost:8181', {
      query: { user: profile.id}
    })

    socket.on('match', user => {
      console.log(user)
    })
  }, [])

  async function handleLike(id) {
    await api.post(`/user/${id}/likes`)
    setUsers(users.filter(user => user.id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/user/${id}/dislikes`)

    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <Scroll>
      <Container>
        <div className="dashboard-container">
            { users.length > 0 ? (
              <ul>
                  <li key={users[0].id}>
                    <img className="photo" src={users[0].avatar_id.path || photoDefault} alt=""/>
                    <footer>
                      <strong>{users[0].name}</strong>
                      <p>{users[0].bio}</p>
                    </footer>
                    <div className="buttons">
                      <button type="button" onClick={() => handleDislike(users[0].id)}>
                        <img src={dislike} alt="bomb!"/>
                      </button>
                      <button type="button" onClick={() => handleLike(users[0].id)}>
                        <img src={like} alt="brota"/>
                      </button>
                    </div>
                  </li>
              </ul>
            ) : (
              <div className="empty">Nada Brotando! :(</div>
            )}
        </div>
      </Container>
    </Scroll>
  )
}
