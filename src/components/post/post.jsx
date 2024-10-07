import styles from './post.module.css'
import { Comment } from '../comment/Comment'
import { Avatar } from '../avatar/avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/119130110?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Clueroi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='6 de outubro às 20:48' datetime="2024-06-10 20:48:10">Publicado há uma hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a> </p>
                <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />

            </div>
        </article>
    )
}