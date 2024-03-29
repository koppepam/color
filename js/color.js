totalSpring = document.getElementById('total-spring');
totalSummer = document.getElementById('total-summer');
totalAutumn = document.getElementById('total-autumn');
totalWinter = document.getElementById('total-winter');

const assessmentButton = document.getElementById('assessment');

function counter(elements) {
  let count = 0
  for (let i = 0; i < elements.length; i++){
    if(elements[i].checked){
      count++
    }
  }
  return count;
}//カウント


const spring = document.getElementsByClassName('spring');
const summer = document.getElementsByClassName('summer');
const autumn = document.getElementsByClassName('autumn');
const winter = document.getElementsByClassName('winter');

assessmentButton.addEventListener("click", () => {
  totalSpring.innerText = counter(spring);//春
  totalSummer.innerText = counter(summer);//夏
  totalAutumn.innerText = counter(autumn);//秋
  totalWinter.innerText = counter(winter);//冬
});


// //ツイート機能
const tweetDivided = document.getElementById('tweet-area');
tweetDivided.innerText = '';

const anchor = document.createElement('a');
const hrefValue = `https://twitter.com/intent/tweet?button_hashtag=${encodeURIComponent('わたしのパーソナルカラー')}&ref_src=twsrc%5Etfw`;

anchor.setAttribute('href', hrefValue);
anchor.setAttribute('class','twitter-hashtag-button');
anchor.setAttribute('data-show-count','false');
anchor.setAttribute('data-size','large');
anchor.setAttribute('data-lang','ja');
anchor.innerText = 'Tweet #わたしのパーソナルカラー';
tweetDivided.appendChild(anchor);

// widgets.js
const script = document.createElement('script');
script.setAttribute('async','async');
script.setAttribute('charset','utf-8');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);



//特徴を見るボタン
document.getElementById('detail-spring').addEventListener("click",function(){
  location.replace("https://halmek.co.jp/life/c/snazzy/6186");
},false); //春

document.getElementById('detail-summer').addEventListener("click",function(){
  location.replace("https://halmek.co.jp/life/c/snazzy/6216");
},false); //夏

document.getElementById('detail-autumn').addEventListener("click",function(){
  location.replace("https://halmek.co.jp/life/c/snazzy/6217");
},false); //秋

document.getElementById('detail-winter').addEventListener("click",function(){
  location.replace("https://halmek.co.jp/life/c/snazzy/6218");
},false); //冬


let scroll = document.getElementById('scroll');
//チェックの数が～までスクロール
assessmentButton.addEventListener("click",function(){
  scroll.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
});

