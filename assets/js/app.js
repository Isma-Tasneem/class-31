// search side bar start
let search = document.querySelector("#search");
let btn = document.querySelector("#search1");

btn.addEventListener("click", ()=>{
    search.classList.toggle('show');
});

let close_btn = document.querySelector("#search_close_btn");

close_btn.addEventListener("click", ()=>{
    search.classList.toggle('hide');
});
// search side bar end