// require.config({
//   shim: {
//   },

//   paths: {
//     hm: 'vendor/hm',
//     esprima: 'vendor/esprima',
//     jquery: 'vendor/jquery.min'
//   }
// });

// require(['app', 'jquery'], function(app, $) {
//   'use strict';
//   $(function() {
//     app.run();
//   });
// });
;(function($) {
  'use strict';
  $(function() {
    $('body').find('*').hide();
    $('body').fadeIn(1000);

    $('body').find('*').each(function(index) {
      $(this).fadeIn(index*20);
    });
  });
})(jQuery);

// Track external links
$('a').click(function() {
  _gaq.push(['_trackEvent', 'Link Event', this.innerText, this.href]);
});
