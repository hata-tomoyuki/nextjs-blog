import utilStyle from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <>
            <div className={utilStyle.headingMd}>
                <h1>404 Not Found</h1>
                <p>ページが見つかりませんでした。</p>
            </div>
        </>
    );
}