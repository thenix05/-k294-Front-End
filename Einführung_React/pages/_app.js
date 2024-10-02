import "./_app.css";

export default function App({Component, pageProps}) {
    return (
        <div>
            <header>Header</header>
            <main>
                <Component {...pageProps}/>
            </main>
            <footer>footer</footer>
        </div>
    )
}