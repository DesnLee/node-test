getCss.onclick = () => {
    const request = new XMLHttpRequest()

    //设置请求的参数
    request.open('GET', `/src/style.css`)

    //文件加载成功执行的代码
    request.onload = () => {
        //创建一个style标签
        const style = document.createElement(`style`)
        //将请求到的内容写入style标签
        style.innerHTML = request.response
        //将style标签插入head
        document.head.appendChild(style)
    }

    //文件加载失败执行的代码
    request.onerror = () => {
        console.log(`加载style.css文件出错！`)
    }

    //发送请求
    request.send()
}

getJs.onclick = () => {
    const request = new XMLHttpRequest()

    //设置请求的参数
    request.open('GET', `/src/2.js`)

    //文件加载成功执行的代码
    request.onload = () => {
        //创建一个style标签
        const script = document.createElement(`script`)
        //将请求到的内容写入style标签
        script.innerHTML = request.response
        //将style标签插入head
        document.body.appendChild(script)
    }

    //文件加载失败执行的代码
    request.onerror = () => {
        console.log(`加载2.js文件出错！`)
    }

    //发送请求
    request.send()
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest()

    //设置请求的参数
    request.open('GET', `/src/3.html`)

    //文件加载成功执行的代码
    request.onload = () => {
        //创建一个style标签
        const div = document.createElement(`div`)
        //将请求到的内容写入style标签
        div.innerHTML = request.response
        //将style标签插入head
        document.body.appendChild(div)
    }

    //文件加载失败执行的代码
    request.onerror = () => {
        console.log(`加载3.html文件出错！`)
    }

    //发送请求
    request.send()
}

getXml.onclick = () => {
    const request = new XMLHttpRequest()

    request.open('GET', `/src/4.xml`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >=200 && request.status < 300){
            let dom = request.responseXML
            let text = dom.getElementsByTagName(`heading`)[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getJson.onclick = () => {
    const request = new XMLHttpRequest()

    request.open('GET', `/src/db/name.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300){
            let json = JSON.parse(request.response)
            let name = document.querySelector(`#name`)
            if (name.innerHTML !== json.name){
                name.innerHTML = json.name
            }else {
                console.log(`已经替换过name了`)
            }
        }
    }
    request.send()
}

let n = 1
getNext.onclick = () => {
    const request = new XMLHttpRequest()

    request.open(`GET`, `/src/db/${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300){
            let array = JSON.parse(request.response)
            array.forEach(item=> {
                let li = document.createElement(`li`)
                li.textContent = item.id
                pages.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}