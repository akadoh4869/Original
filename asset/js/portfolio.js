$(document).ready(function () {
    // 画像がクリックされたときの処理
    $(".gallery-image").click(function () {
        var imgSrc = $(this).attr("src");
        $(".lightbox-image").attr("src", imgSrc);
        $(".lightbox").fadeIn();
    });

    // ライトボックスがクリックされたときの処理
    $(".lightbox").click(function () {
        $(".lightbox").fadeOut();
    });
});
