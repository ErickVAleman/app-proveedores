import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps =  await Document.getInitialProps(ctx);
        console.log(initialProps);
        return { ...initialProps }
    }
    render(){
        return(
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <style>{` body{ margin: 0; } `}</style>
                </head>
                <body>
                    <Main />
                    <NextScript /> 
                </body>
            </html>
        )
    }
}