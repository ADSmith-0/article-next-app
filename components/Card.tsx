import Image from 'next/image';
import styles from '../styles/Card.module.css';
import { CardType } from '../Types/CardType';
export default function Card({ image, title, domain, date, content, tag }:CardType) {
    return (
        <article>
            <Image 
                src={image}
                height={200}
                width={200}
                alt={title+" cover image"}
            />
            <h2 className={styles.title}>{title}</h2>
            <section id={styles.meta_info}>
                <a href={domain}>{domain}</a>
                <h3>{date}</h3>
            </section>
            <p id={styles.content}>{content}</p>
            <span className={styles.pill}>{tag}</span>
        </article>
    )
}
