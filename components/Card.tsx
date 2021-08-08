import Image from 'next/image';
import styles from '../styles/Card.module.css';
const { container, cover_image, bookmark, inline, meta_info, domain_link, pill } = styles;
import { CardType } from '../Types/CardType';
export default function Card({ image, title, domain, date, content, tag }:CardType) {
    return (
        <article id={container}>
            <Image 
                id={cover_image}
                src={image || '/images/placeholder.jpg'}
                height={200}
                width={200}
                alt={title+" cover image"}
            />
            <div id={inline}>
                <h2 className={styles.title}>{title}</h2>
                <button id={bookmark}>Bookmark</button>
            </div>
            <section id={meta_info}>
                <a id={domain_link} href={"https://"+domain}>{domain}</a>
                <h3 id={styles.date}>{date}</h3>
            </section>
            <p id={styles.content}>{content}</p>
            <span className={pill}>{tag}</span>
        </article>
    )
}
