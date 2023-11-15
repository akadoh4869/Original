const pics_src = ["./asset/img/yoru1.jpg","./asset/img/flower1.jpg","./asset/img/yakei1.jpg","./asset/img/flower2.jpg","./asset/img/monokuro1.jpg"];
let num = -1;


function slideshow_timer(){
  if (num === 4){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 3000);



// let pics = ["./asset/img/me2.jpg","./asset/img/me1.jpg"];

// function slideshow_timer(){
//     if (num === 1){
//       num = 0;
//     } 
//     else {
//       num ++;
//     }
//     document.getElementById("me").src = pics[num];
//   }
  
//   setInterval(slideshow_timer, 4000);

// const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
// const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
// ham.on('click', function () { //ハンバーガーメニューをクリックしたら
//   ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
//   nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
 
// });