__d(
  "CometAIChatScroll",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 50,
      l = 60;
    function s(e) {
      var t = getComputedStyle(e);
      return (
        /(auto|scroll|overlay)/.test(t.overflow + t.overflowY + t.overflowX) &&
        (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
      );
    }
    function u(e) {
      for (var t = e.parentElement; t; ) {
        if (s(t)) return t;
        t = t.parentElement;
      }
      return document.documentElement;
    }
    function c(e, t) {
      var n = e.scrollHeight,
        r = e.scrollTop,
        o = 0,
        a = function () {
          if ((o++, o > l)) {
            t == null || t();
            return;
          }
          var i = e.scrollHeight,
            s = r + (i - n);
          n !== i
            ? ((e.scrollTop = s), t == null || t())
            : window.requestAnimationFrame(a);
        };
      window.requestAnimationFrame(a);
    }
    ((i.SCROLL_MARGIN = e),
      (i.isScrollable = s),
      (i.getScrollParent = u),
      (i.preventScrollUpOnDOMUpdate = c));
  },
  66,
);
