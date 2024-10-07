import './global.css';
import styles from './app.module.css'

import { Post } from './components/post/post';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/sidebar';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="Clueroi"
              content="Lorem Ipsum"
            />
            <Post
              author="Clueroi"
              content="Lorem Ipsum"
            />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
