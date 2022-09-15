function countPageView() {
    try {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    } catch (e) {}
    try {
        yaCounter35701405.hit(window.location.pathname);
    } catch (e) {}
}