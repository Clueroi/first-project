import './global.css';
import styles from './app.module.css'

import { Post } from './components/post/post';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/sidebar';

// author: {avatar_url:"", name:"",  role:""}
// PublishedAt: Date
// Content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/clueroi.png",
      name: "Eric Romero",
      role: "Web Developer  "
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare'},
      {type: 'link', content:'#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2022-06-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/SStyum.png",
      name: "Guilherme Rocha",
      role: "Rocketseat CTO "
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋',},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉jane.design/doctorcare'},
      {type: 'link', content:'#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-07-13 20:00:00')
  }
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {
              posts.map(post =>{
                return (
                  <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  /> 
                )
              })
            }
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
