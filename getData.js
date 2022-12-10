export default async function getData (number){
    const getUser = await (await fetch("https://jsonplaceholder.typicode.com/users/" + number)).json()
    const getPost = await (await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + number)).json()

    console.log(getUser)
    console.log(getPost)
}