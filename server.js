let http = require('http')
let fs = require('fs')
let url = require('url')
let port = process.argv[2]

if (!port) {
    console.log('请指定端口号! 像这样 node server.js 8888')
    process.exit(1)
}

let server = http.createServer(function (request, response) {
    let parsedUrl = url.parse(request.url, true)
    let pathWithQuery = request.url
    let queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }
    let path = parsedUrl.pathname
    let query = parsedUrl.query
    let method = request.method
    /******** 从这里开始看，上面不要看 ************/

    console.log('有个人摸了一下 ' + pathWithQuery + ' 这个地方')

    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        let index = fs.readFileSync(`public/index.html`).toString()
        let page = fs.readFileSync(`public/src/db/1.json`)
        let array = JSON.parse(page)
        let result = array.map(item => `<li>${item.id}</li>`).join(``)
        index = index.replace(`{{ page }}`, `<ul id = "pages">${result}</ul>`)
        response.write(index)
        response.end()
    } else if (path === '/src/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync(`public/src/main.js`))
        response.end()
    } else if (path === '/src/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync(`public/src/style.css`))
        response.end()
    } else if (path === '/src/2.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync(`public/src/2.js`))
        response.end()
    } else if (path === '/src/3.html') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(fs.readFileSync(`public/src/3.html`))
        response.end()
    } else if (path === '/src/4.xml') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/xml;charset=utf-8')
        response.write(fs.readFileSync(`public/src/4.xml`))
        response.end()
    } else if (path === '/src/db/name.json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(fs.readFileSync(`public/src/db/name.json`))
        response.end()
    }  else if (path === '/src/db/2.json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(fs.readFileSync(`public/src/db/2.json`))
        response.end()
    } else if (path === '/src/db/3.json') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(fs.readFileSync(`public/src/db/3.json`))
        response.end()
    } else if (path === '/302') {
        response.statusCode = 302
        response.setHeader('Location', 'http://www.google.com/')
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你访问的页面不存在`)
        response.end()
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('node已经在 ' + port + ' 端口启动成功！访问地址: http://localhost:' + port)

