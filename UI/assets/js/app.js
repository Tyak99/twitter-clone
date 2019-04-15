$(document).ready(function () {
    $(".form-wrapper .button.next").click(function () {
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        $(".form-wrapper").submit(function (e) {
            e.preventDefault();
        });

        if (currentSectionIndex === 3) {
            $(document).find(".form-wrapper .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
    });

    $(".form-wrapper .button.prev").click(function () {
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        if (currentSectionIndex === 1) {
            $(document).find(".form-wrapper .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").prev().addClass("is-active");
        headerSection.removeClass("is-active").prev().addClass("is-active");

        $(".form-wrapper").submit(function (e) {
            e.preventDefault();
        });
    });
});

// JQUERY
$(function () {
    $('.searchBtn').click(function () {
        $('.searchContainer').toggleClass('show');
        $('.meContainer, .meOverlay').removeClass('show');
        $('.searchOverlay').toggleClass('show');
    });
    $('.you').click(function () {
        $('.meContainer').toggleClass('show');
        $('.searchContainer, .searchOverlay').removeClass('show');
        $('.meOverlay').toggleClass('show');
    });
    $('.meOverlay, .searchOverlay').click(function () {
        $('.searchContainer, .meContainer').removeClass('show');
        $('.meOverlay, .searchOverlay').removeClass('show');
    });

    $('.newTweet, .closeNewTweet').click(function () {
        $('.newTweetContainer').toggleClass('show');
    });
    $('.newTweetDarken').click(function () {
        $('.newTweetContainer').removeClass('show');
    });

    $('.textarea textarea').focusin(function () {
        $(this).addClass('focus');
        $('.addTweet').addClass('change');
    });

    $('.textarea textarea').focusout(function () {
        $(this).removeClass('focus');
        $('.addTweet').removeClass('change');
    });


    // NIGHT MODE
    $('.NightMode').click(function () {
        $('nav, body, .meContainer, .searchContainer, .timeline, .textarea, .loadMore, .module, .newTweetContainer').toggleClass('night');
    });
});
