import { Avatar } from '../avatar/avatar'
import styles from './sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <div className={styles.profile}>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/119130110?v=4"
                    />
                    <strong>Clueroi</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="">
                        <PencilLine
                            size={20}
                        />
                        Editar o seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}