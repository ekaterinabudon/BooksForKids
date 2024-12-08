'use client'
import { useLang } from '@/hooks/useLang';
import Link from 'next/link';
import styles from '@/styles/contact/index.module.css'

const Contact = () => {
    const { lang, translations } = useLang()

    return (
        <div className={`container ${styles.contact_container}`}>
            <p>{translations[lang].other.questions}</p>
            <p><Link className={styles.contact_page_link} href='mailto:rusbooksforkids@gmail.com'> rusbooksforkids@gmail.com </Link></p>
        </div>
    );
};

export default Contact;