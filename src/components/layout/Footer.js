import {FaYoutube, FaGoogle, FaFrog} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer>
            <ul className={styles.socialList}>
                <li>
                    <FaYoutube />
                </li>
                <li>
                    <FaGoogle />
                </li>
                <li>
                    <FaFrog />
                </li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )

}

export default Footer