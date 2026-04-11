__d(
  "WAWebNewsletterTabDrawerUtils",
  ["WAWebFrontendConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >=
        e.scrollHeight - e.clientHeight
      );
    }
    l.isScrollAtBottomOfList = e;
  },
  98,
);
