// Selection document elements 
const inputField = document.getElementById('input-field');
const searchBtn = document.getElementById('search-btn');
const card = document.getElementById('cards');
const cardData = document.getElementById('cardData');
const searchResult = document.getElementById('search-results');


// Dynamic Html Arrow function 
const bookCards = (coverPic,bookTitle,authorName,id, publishName, numbers) =>{
    const div1 = document.createElement('div');
    div1.classList.add('col','my-3','rounded-3');
    const div = document.createElement('div');
    div.classList.add('card','d-flex','flex-column','justify-content-center', 'align-items-center');
    div.style.width="18rem";
    div.style.height= '35rem';
    div.innerHTML =`
    <img src="https://covers.openlibrary.org/b/id/${coverPic}-M.jpg" class="card-img-top img-fluid w-75" alt="">
    <div class="card-body overflow-hidden">
        <h5 class="card-text"> Book title : ${bookTitle}</h5>
        <p class="card-text"> Authore Name : ${authorName}</p>
        <p class="card-title">First publish year : ${id}</p>
        <p class="card-text "> Publishers : ${publishName}</p>
    </div>`;
    div1.appendChild(div);
    card.appendChild(div1);
    searchResult.innerText =`Search result :${numbers}` ;
};


// API calling funtion 
const bookApi =(bookName) =>{
    fetch(`http://openlibrary.org/search.json?q=${bookName}`)
    .then(res => res.json())
    .then(datas => {
        const {docs} = datas;
        console.log(docs);
        if (docs.length !== 0){
            docs.forEach( element => {
                const {cover_i,title,author_name,first_publish_year,publisher} = element;
                if ((author_name && cover_i && publisher) !== undefined){
                    books(cover_i,title,author_name,first_publish_year,publisher, docs.length);
                };
            });   
        }else{
            searchResult.innerText =`Result not found`
        }  
    })
};


// read property and input it in dymnamic html function 
const books = (coverPic,bookTitle,authorName,id, publishName, numbers) => {
    authorName.forEach(writter => bookCards(coverPic,bookTitle,writter,id, publishName, numbers))
};


// Search  butter Click Event 
searchBtn.addEventListener('click',function(){
    inputField.innerText = '';
    const inputValue = inputField.value;
    bookApi(inputValue);
});
