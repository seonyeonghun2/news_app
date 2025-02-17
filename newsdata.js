const api_key = "pub_694833507b8624b096098239a2f5b2539299c";
const query = "pizza";
const url = "https://newsdata.io/api/1/latest";
const request = `${url}?apikey=${api_key}&q=${query}&language=kr`;

// https://newsdata.io/api/1/archive?apikey=pub_694833507b8624b096098239a2f5b2539299c&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25

// 검색폼에서 쿼리(q) 입력하면, 이 문자열을 전달해서 newdata.io 에서 GET 요청하고,
// 응답받은 결과값을 UI에 결합해서 화면에 렌더링 ==> 뉴스 앱 / 뉴스 웹 + 부트스트랩(반응형)