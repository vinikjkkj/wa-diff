__d(
  "getUnboundedScrollPosition",
  ["Scroll"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e === window) {
        var t, r;
        return {
          x:
            (t = window.pageXOffset) != null
              ? t
              : n("Scroll").getLeft(document.documentElement),
          y:
            (r = window.pageYOffset) != null
              ? r
              : n("Scroll").getTop(document.documentElement),
        };
      }
      return { x: n("Scroll").getLeft(e), y: n("Scroll").getTop(e) };
    }
    a.exports = e;
  },
  null,
);
