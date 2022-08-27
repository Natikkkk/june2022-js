// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let postID = JSON.parse(url.searchParams.get('id'));
console.log(url);
console.log(postID);

function blockOfPost(value, box) {
    for (const info in value) {
        if (typeof value[info] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${info}:${value[info]}`;
            box.appendChild(p);
        } else {

            blockOfPost(value[info], box);
        }
    }
}

let containerOfComment= document.getElementsByClassName('post')[0];
blockOfPost(postID, containerOfComment)

fetch(`https://jsonplaceholder.typicode.com/posts/${postId.id}/comments`)
    .then(res => res.json())
    .then(value => {
        let containerOfComment = document.getElementsByClassName('comments')[0];
        for (const info of value) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            blockOfPost(info, comment);
            containerOfComment.appendChild(comment);
        }
    })
