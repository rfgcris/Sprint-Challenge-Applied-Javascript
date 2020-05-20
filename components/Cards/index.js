// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles').then( response => {



const javasript = response.data.articles.javascript
const bootstrap = response.data.articles.bootstrap
const technology = response.data.articles.technology
const jquery = response.data.articles.jquery
const node = response.data.articles.node



 insertArticles = (topic) => {
     topic.forEach(element => {

        const card = document.createElement('div')
        const headline = document.createElement('div')
        const author = document.createElement('div')
        const imgContainer = document.createElement('div')
        const img = document.createElement('img')
        const signature = document.createElement('span')

        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(img)
        author.appendChild(signature)

        card.classList.add('card')
        headline.classList.add('headline')
        imgContainer.classList.add('img-container')

        headline.textContent = element.headline
        img.src = element.authorPhoto
        signature.textContent = element.authorName

        document.querySelector('.card-container').appendChild(card)
         
     });

 }


 const topics = [javascript, bootstrap, technology, jquery, node]

 topics.forEach(element => {
     insertArticle(item)
 });

});

.catch( error => {
    console.log('failed')

});

.finally( () => {
    console.log('done')
})