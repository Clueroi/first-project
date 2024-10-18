import { Comment } from '../comment/Comment'
import { Avatar } from '../avatar/avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content }) {

    const [Comments, setComments] = useState([
        'Post muito bacana, hein'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const datePublishedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true
    })

    function HandleCreateNewComment(){
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...Comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={datePublishedFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {
                    content.map(item=>{
                        if(item.type === 'paragraph'){
                            return <p key={item.content}>{item.content}</p>
                        } else if(item.type === 'link'){
                            return <p key={item.content}><a href="#">{item.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={HandleCreateNewComment} className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    name='comment'
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {Comments.map(comment=>{
                    return <Comment key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}