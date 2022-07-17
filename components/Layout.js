import Head from "next/head";
import styles from './layout.module.css'
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Tomoyuki Hata";
export const sitetitle = "Next.js Blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img src="/images/profile.jpg" className={`${utilStyles.imgborderCircle} ${styles.headerHomeImage}`}  />
                        <h1 className={utilStyles.heading2Xl}>{ name }</h1>
                    </>
                ) : (
                    <>
                        <img src="/images/profile.jpg" className={`${utilStyles.imgborderCircle}`}  />
                        <h1 className={utilStyles.heading2Xl}>{ name }</h1>
                    </>
                )}
            </header>
            <main>{ children }</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;