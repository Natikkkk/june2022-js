// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let url = new URL(location.href);
let postID = JSON.parse(url.searchParams.get('id'));
console.log(url);
console.log(postID);

fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/`)
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
        let ul = document.createElement('ul')
        document.body.appendChild(ul)

        for (const item in posts) {
            let li = document.createElement('li')
            li.classList.add('li')
            li.innerText = `${item} - ${posts[item]}`
                ul.appendChild(li)
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then((response) => response.json())
            .then((coments) => {

                let comentsDiv = document.createElement('div')
                comentsDiv.classList = 'div'
                document.body.appendChild(comentsDiv)

                let name = document.createElement('div')
                name.innerText = 'Comments'
                name.classList.add('name')
                comentsDiv.appendChild(name)


                for (const item of coments) {
                    let coment = document.createElement('p')
                    coment.classList = 'coment'
                    coment.innerText = `${item.body}`

                        comentsDiv.appendChild(coment)

                }
            });
    });




//
// let url = new URL(location.href);
// let id = url.searchParams.get('id');
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`)
// .then((response) => response.json())
//     .then(posts => {
//         console.log(posts);
//         let ul = document.createElement('ul')
//         document.body.appendChild(ul)
//
//         for (const item in posts) {
//             let li = document.createElement('li')
//             li.classList.add('li')
//             li.innerText = ${item} - ${posts[item]}
//                 ul.appendChild(li)
//         }
//
//         fetch`(https://jsonplaceholder.typicode.com/posts/${id}/comments)`
//     .then((response) => response.json())
//             .then((coments) => {
//
//                 let comentsDiv = document.createElement('div')
//                 comentsDiv.classList = 'div'
//                 document.body.appendChild(comentsDiv)
//
//                 let name = document.createElement('di')
//                 name.innerText = 'Comments'
//                 name.classList.add('name')
//                 comentsDiv.appendChild(name)
//
//
//                 for (const item of coments) {
//                     let coment = document.createElement('p')
//                     coment.classList = 'coment'
//                     coment.innerText = ${item.body}
//
//                         comentsDiv.appendChild(coment)
//
//                 }
//             });
//     });


// let url = new URL(location.href);
// let postID = JSON.parse(url.searchParams.get('id'));
// console.log(url);
// console.log(postID);
//
//
// fetch`(https://jsonplaceholder.typicode.com/posts/${postID}/)`
//     .then((response) => response.json())
//     .then(post => {
//         console.log(post);
//     })
//
//


//
// function blockOfPost(value, box) {
//     for (const info in value) {
//         if (typeof value[info] !== 'object') {
//             let p = document.createElement('p');
//             p.innerText = `${info}:${value[info]}`;
//             box.appendChild(p);
//         } else {
//
//             blockOfPost(value[info], box);
//         }
//     }
// }
//
// let containerOfComment= document.getElementsByClassName('post')[0];
// blockOfPost(postID, containerOfComment)
//
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}/comments`)
//     .then(res => res.json())
//     .then(value => {
//         let containerOfComment = document.getElementsByClassName('comments')[0];
//         for (const info of value) {
//             let comment = document.createElement('div');
//             comment.classList.add('comment');
//             blockOfPost(info, comment);
//             containerOfComment.appendChild(comment);
//         }
//     })
