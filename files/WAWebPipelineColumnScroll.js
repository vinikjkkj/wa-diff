__d(
  "WAWebPipelineColumnScroll",
  ["WAWebFrontendConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.clientHeight,
        n = e.scrollHeight,
        r = e.scrollTop;
      return r + o("WAWebFrontendConstants").SCROLL_FUDGE > n - t;
    }
    l.shouldLoadNextPage = e;
  },
  98,
);
