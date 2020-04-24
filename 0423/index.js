$(document).ready(() => {
  let url = 'http://jsonplaceholder.typicode.com/posts/'

  // axios.get(url)
  //      .then(function(resp){
  //       let firstId = resp.data[0].id   
  //       let url2 = `http://jsonplaceholder.typicode.com/posts/${firstId}`
  //       return axios.get(url2)
  //      })
  //      .then(function(resp){
  //        let html = toPostHtml(resp.data)
  //        console.log(html)
  //        $("#container").append(html)
  //      })

  /* for ver */
  // axios.get(url)
  //      .then(function(resp){
  //       let length = resp.data.length
  //       for(let i = 0; i < length; i++){
  //         let html = toPostHtml(resp.data[i])          
  //         $(".container").append(html)
  //       }       
  //      })    
  // })

  /* map */
  axios.get(url)
       .then(function(resp){
        let posts = resp.data
        let html = posts.map( post => toPostHtml(post))
        $(".container").append(html)
       })    

  })


function toPostHtml(jsn) {
  return `
  <h1>ID: ${jsn.id}</h1>
  <h3>Title: ${jsn.title}</h3>
  <p>${jsn.body}</p>
  `;
}