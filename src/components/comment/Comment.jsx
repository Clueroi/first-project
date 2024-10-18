import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from '../avatar/avatar'

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://avatars.githubusercontent.com/u/119130110?v=4"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Clueroi</strong>
                            <time title='6 de outubro às 20:48' datetime="2024-06-10 20:48:10">Publicado há uma hora</time>
                        </div>
                        <button title='Deletar'> <Trash size={24} /></button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}