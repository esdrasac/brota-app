import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { loadFeedRequest, postFeedRequest, likeFeedRequest } from '../../store/modules/feed/actions';


import AvatarInput from './AvatarInput';
import capa from '../../assets/abstract2.jpg'

import { Container, Scroll } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const feed = useSelector(state => state.feed.posts);

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadFeed() {
      dispatch(loadFeedRequest())
    }

    loadFeed()
  }, [])


  function handleSubmit({inputFeed}) {
    dispatch(postFeedRequest(inputFeed))
    setPosts('')
  }

  async function handleLike(id) {
    console.log(profile)
    dispatch(likeFeedRequest(id))
    setUsers(users.filter(user => user.id !== id))
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Scroll>

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
                    <textarea
                      name="bio"
                      value={profile.bio || ''}
                      rows="3"
                      readOnly={true}
                      placeholder="> Nada sobre mim"
                      maxLength="180">
                    </textarea>
                  </footer>
              </li>
              </div>
            </div>
            <div className="body">
                <div className='body-header'>
                  <div>
                    <h1>💕</h1>
                    <label>{profile.likesQnt || 0}</label>
                  </div>
                  <div>
                    <h1>👥</h1>
                    <label>{profile.matchQnt || 0}</label>
                  </div>
                  <div>
                    <h1>👀</h1>
                    <label>0</label>
                  </div>
                </div>

              <div className="body-feed">
                  <Input multiline name="inputFeed" onInput={(e) => setPosts(e.target.value)} defaultValue={posts} placeholder="Quê que ta pegando?"/>                <footer>
                  <button type="submit" className="btn-lancar">🧨 Publicar</button>
                </footer>
              </div>
              <hr/>
            </div>

          </div>
        </Form>
              <div>
                  <ul>
                    { feed && feed.length > 0 ? (
                      feed.map(post => (
                        post.user_id === profile._id ?
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
                            <Link className="edit" to="/profile">
                            {post.likes.includes(profile._id) ? `Vc e mais ${post.likes.length} acharam dá hora` : `${post.likes.length} acharam dá hora`}
                            </Link>
                            <Link className="edit" to="/profile">
                            {`${post.coments.length} comentários`}
                            </Link>
                          </div>
                          <hr/>
                          <footer>
                              <button onClick={() => handleLike(post._id)}> 👏 Nó, da hora!</button>
                              <button> 💬 Comentar</button>
                          </footer>
                        </div>
                      </li>
                      : null
                    ))
                    ) : (
                      <div className="empty">Nenhuma braba! :(</div>
                    )}
                  </ul>
              </div>
        <button type="button" onClick={handleSignOut}>
          Sair do Brota!
        </button>
      </Container>
    </Scroll>
  );
}
