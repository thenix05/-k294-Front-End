import styles from "./index.module.css"
import Link from "next/link"
import Head from "next/head"

export default function IndexPage() {

    const message = "I am a string!"
    const someFunction = () => {
        return "I am also a string!"
    }
    const aDiv = <div>hello, I am a div in JSX!</div>

    //Das style-Attribut:
    const style = {
        fontSizte: "2em",
        width: "100%",
        height: "50%",
        margin: "0 0 0 0",
        padding: "0.5em 0"
        
    }
    return(
        <div>
            <div className={styles.index}>
            <h1>HelloWorld</h1>
            </div>
            <br></br>

            <div>
                {/*JavaScript Ausdrpcke einfügen*/}
            <div>{5+5}</div>
            <div>{message}</div>
            <div>{someFunction()}</div>
            <br></br>
            {aDiv}

            {/*Singletags*/}
            <img src="https://placehold.co/150" alt="placeholder"></img>
            <br/>
            <input
            onClick={(e) => console.log("click")}
            type="text"
            id="country"
            name="country"
            value="Schweiz"
            />

            {/*Attribute*/}
            {/*class wird zu className*/}
            <div className="some-class"></div>
            {/*Das style-Attribut:*/}
            <div style={style}>Ein div mit einem style-tag</div>

            {/*Assets (Datein, Bilder etc) */}
            <Link href={"/about"}>about</Link>


            {/*Head */}
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="inital-scale=1.0, width=device-width"></meta>
            </Head>
            <Head>
                <h1>Hello World!</h1>
                <img src="/nextjs-logo.svg"></img>
                <Link href="/about">About</Link>
            </Head>
            </div>
        </div>
    );
}