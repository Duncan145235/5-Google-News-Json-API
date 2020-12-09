const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){

    if (input.value == ''){
        alert('input field is empty!')
        return
    }

    newsList.innerHTML = ''

    e.preventDefault()

    const apiKey = 'fe3730fcbf334f90bbb11d439d55acbd'

    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(articles =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', articles.url);
            a.setAttribute('target', '_blank');
            a.textContent = articles.title;
            li.appendChild(a);
            newsList.appendChild(li);
        }) 
    }).catch((error)=>{
        console.log(error)
    })

    console.log(topic)
}