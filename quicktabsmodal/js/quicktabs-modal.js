/**
 * Created by Jose Tavares on 3/31/17.
 */

(function ($) {

$( document ).ready(function() {
    $("div.quicktabs-tabpage").addClass('quicktabs-hide');
    $('<div class="closeTabsModal"><a name="closeTabsModal"><div></div></a></div>').prependTo(".quicktabs-tabpage div.block .content");
    $("a[name='closeTabsModal']").click(function(){ $("div.quicktabs-tabpage").addClass('quicktabs-hide'); });
});
})(jQuery);