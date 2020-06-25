import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import {useDispatch, useSelector} from 'react-redux'
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import { loadFeedRequest, postFeedRequest, likeFeedRequest } from '../../store/modules/feed/actions';

import { Container, Scroll} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const feed = useSelector(state => state.feed.posts);

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState([])

  useEffect(() => {
    async function loadFeed() {
      dispatch(loadFeedRequest())
    }

    loadFeed()
  }, [])

  useEffect(() => {
    const socket = io('http://localhost:8181', {
      query: { user: profile.id}
    })

    socket.on('match', user => {
      console.log(user)
    })
  }, [])

  async function handlePublish({inputFeed}) {
    await dispatch(postFeedRequest(inputFeed))
    setPosts('')
  }

  async function handleLike(id) {
    console.log(profile)
    dispatch(likeFeedRequest(id))
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <Scroll>
      <Container>
      <div className="feed" >
        <Form className="textarea" onSubmit={handlePublish}>
          <div>
            <img src={profile.avatar ? profile.avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt=""/>
            <Input multiline name="inputFeed" onInput={(e) => setPosts(e.target.value)} value={posts} placeholder="Quê que ta pegando?"/>
          </div>
          <footer>
            <button type="submit" className="btn-lancar">🧨 Publicar</button>
          </footer>
        </Form>

        <div>
            <ul>
              { feed && feed.length > 0 ? (
                feed.map(post => (
                <li key={post._id}>
                  <div>
                    <header>
                        <img src={post.userAvatar.path || "https://api.adorable.io/avatars/50/abott@adorable.png"} alt=""/>
                          <strong>
                            <Link className="link" to="feed">
                              {post.user_name}
                            </Link>
                          </strong>
                    </header>
                    <p>{post.content}</p>
                    <div>
                      <Link className="edit" to="/curtidas">
                      {post.likes.includes(profile._id) ? `Vc ${post.likes.length - 1 === 0 ? 'achou da hora' : `e mais ${post.likes.length - 1} acharam dá hora`}` : `${post.likes.length} acharam dá hora`}
                      </Link>
                      <Link className="edit" to="/post">
                      {`${post.coments.length} comentários`}
                      </Link>
                    </div>
                    <hr/>
                    <footer>
                        <button onClick={() => handleLike(post._id)}> 👏 Nó, da hora!</button>
                        <button > 💬 Comentar</button>
                    </footer>
                  </div>
                </li>
              ))
              ) : (
                <div className="empty">Nenhuma braba! :(</div>
              )}
            </ul>
        </div>
      </div>
      </Container>
    </Scroll>
  )
}
