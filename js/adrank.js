(function($) {
    if ($('.div-news').length > 0) {
        $('.div-news').each(function(index) {
            if (index == 3 ) {
                $(this).after('<p style="text-align: center;"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8114152585404854" data-ad-slot="5308217531" data-ad-format="auto"></ins></p>');
                (adsbygoogle = window.adsbygoogle || []).push({});
            } else if (index == 8) {
                $(this).after('<p style="text-align: center;"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8114152585404854" data-ad-slot="6784950732" data-ad-format="auto"></ins></p>');
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        });
    }
    else {
        $('#mArticle p:contains("2.")').after('<p style="text-align: center;"><ins class="adsbygoogle" style="display:inline-block;width:320px;height:100px" data-ad-client="ca-pub-8114152585404854" data-ad-slot="2384567530"></ins></p>');
        (adsbygoogle = window.adsbygoogle || []).push({});
        $('script[src*="beingriant.github.io"]').before('<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8114152585404854" data-ad-slot="3970548734" data-ad-format="auto"></ins>');
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
})(jQuery);