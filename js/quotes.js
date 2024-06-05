const quotes=[
    {
        quote: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
        author: "- 넬슨 만델라",
    },
    {
        quote: "생활은 과감한 모험이거나 아니면 아무것도 아니다.",
        author: "- 헬렌 켈러",
    },
    {
        quote: "사랑받고 싶다면, 사랑하고 사랑스러워져라.",
        author: "- 벤자민 프랭클린",
    },
    {
        quote: "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
        author: "- 토마스 에디슨",
    },
    {
        quote: "어떤 것이든지 사랑하게 되는 방법은 이를 잃을 수도 있다는 것을 알게되는 것이다.",
        author: "- G.K. 체스터턴",
    },
    {
        quote: "성공한 사람이 되려고 애쓰지 말고, 가치 있는 사람이 되려 애써라.",
        author: "- 아인슈타인",
    },
    {
        quote: "더 열심히 일하면 할수록 운이 더 좋아진다는 것을 알게 된다.",
        author: "- 토마스 제퍼슨",
    },
    {
        quote: "더 나은 것을 위해 좋은 것을 포기하는 걸 두려워 하지 마라.",
        author: "- 존 록펠러",
    },
    {
        quote: "자신을 가장 빨리 변화시키는 방법은 당신이 되고 싶은 모습을 하고 있는 사람들과 어울리는 것이다.",
        author: "- 리드 호프만",
    },
    {
        quote: "무언가를 시작하고 실패하는 것보다 더 나쁜 것은… 아무것도 시작하지 않는 것이다.",
        author: "- 세스 고딘",
    },
]

const quote = document.querySelector("#quote span:first-child") //명언 가져오기
const author = document.querySelector("#quote span:last-child") //작가 가져오기

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
