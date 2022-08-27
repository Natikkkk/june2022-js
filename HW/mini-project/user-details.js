// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.


let url = new URL(location.href);
let id = JSON.parse(url.searchParams.get('id'));
console.log(url);
console.log(id);

function blockOfUser(value, box) {
    for (const info in value) {
        if (typeof value[info] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${info}:${value[info]}`;
            box.appendChild(p);
        } else {

            blockOfUser(value[info], box);
        }
    }
}

let containerOfPost = document.getElementsByClassName('user')[0];
blockOfUser(id, containerOfPost)


let buttonPost = document.createElement("button");
buttonPost.innerText = 'Post of current user';
buttonPost.classList.add('buttonPost');
document.body.appendChild(buttonPost);

let containerOfPosts = document.createElement('div');
containerOfPosts.classList.add('posts');
document.body.appendChild(containerOfPosts);

buttonPost.addEventListener('click', () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}/posts`)
        .then(res => res.json())
        .then(value => {
            let container=document.getElementsByClassName('posts')[0]
            container.innerHTML='';

            for (const info of value) {
                let postdiv = document.createElement('div');
                postdiv.classList.add('post');

                let h4 = document.createElement('h4');
                h4.classList.add('h4')
                h4.innerText = info.title;
                postdiv.appendChild(h4);

                let postbtn = document.createElement('button');
                postbtn.classList.add('button')
                postbtn.innerText = 'More info';
                postdiv.appendChild(postbtn);
                postbtn.onclick = function (){
                    location.href = `post-details.html?id=${info.id}`;
                }

                container.appendChild(postdiv)
            }
        })
})