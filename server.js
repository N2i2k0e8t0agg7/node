const http = require("http")

const app = http.createServer((req, res) => {
    const { method, url } = req
    if (url === "/") {
        if (method === "GET") {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node</title>
                </head>
                <body>
                    <nav>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </body>
                </html>`)
                return res.end()
        }else{
            res.writeHead(405, { "message":"No data send" })
            res.write('{ "message":"No data send" }')
            return res.end()
        }    
    }else if (url.toLowerCase() === "/home") {
        if (method === "GET") {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node</title>
                </head>
                <body>
                    <h1>Home page</h1>
                </body>
                </html>`)
                return res.end()
        }else{
            res.writeHead(405, { "message":"No data send" })
            res.write('{ "message":"home not send" }')
            return res.end()
        }
    }
    else if (url.toLowerCase() === "/about") {
        if (method === "GET") {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node</title>
                </head>
                <body>
                    <h1>About page</h1>
                </body>
                </html>`)
                return res.end()
        }else{
            res.writeHead(405, { "message":"No data send" })
            res.write('{ "message":"about not send" }')
            return res.end()
        }
    }else if (url.toLowerCase() === "/contact") {
        if (method === "GET") {
            res.writeHead(200, { "content-type": "text/html" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node</title>
                </head>
                <body>
                    <h1>Contact page</h1>
                </body>
                </html>`)
                return res.end()
        }else{
            res.writeHead(405, { "message":"No data send" })
            res.write('{ "message":"contact not send" }')
            return res.end()
        }
    }else{
        res.writeHead(404, { "message":"Page not found" })
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Node</title>
                </head>
                <body>
                    <h1>page not found</h1>
                </body>
                </html>`)
            return res.end()
    }
})

port = 3000

app.listen(port, () => {
    console.log(`run on http://localhost:${port}`);
})