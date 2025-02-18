const api_key = "pub_694833507b8624b096098239a2f5b2539299c";
const url = "https://newsdata.io/api/1/latest";

const newsForm = document.querySelector("#news_form");

newsForm.addEventListener("submit", function(e){
    e.preventDefault();       
    let query = document.querySelector("#keyword");
    if (query.value == "") {
        alert("검색어를 입력해야 합니다!");
        query.focus();
        return; // 함수를 종료!!
    }

    fetchNews(query.value);
});

async function fetchNews(keyword){
    const req_url = `${url}?apikey=${api_key}&q=${keyword}`;
    const jsonData = await fetch(req_url);
    console.log(jsonData);
}