__d(
  "AbraScrollUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      t === void 0 && (t = "all");
      var r = l(e);
      if (r != null) {
        var o = e.getBoundingClientRect(),
          a = s(e, r),
          i = a + o.height,
          c = u(r),
          d = r.scrollTop + c,
          m = r.scrollTop + r.clientHeight;
        t === "top"
          ? (a < d || a > m) && e.scrollIntoView(n)
          : t === "bottom"
            ? (i < d || i > m) && e.scrollIntoView(n)
            : (a < d || i > m) && e.scrollIntoView(n);
      }
    }
    function l(e) {
      if (e == null) return null;
      for (
        var t = getComputedStyle(e), n = /(auto|scroll)/, r = e;
        (r = (o = r) == null ? void 0 : o.parentElement);
      ) {
        var o;
        if (r === document.body) return document.documentElement;
        if (((t = getComputedStyle(r)), n.test(t.overflow + t.overflowY)))
          return r;
      }
      return document.documentElement;
    }
    function s(e, t) {
      for (var n = e.offsetTop, r = e.offsetParent; t !== r; )
        if (r instanceof HTMLElement)
          ((n += r.offsetTop), (r = r.offsetParent));
        else return n;
      return n;
    }
    function u(e) {
      var t,
        n = getComputedStyle(e),
        r = parseInt((t = n.scrollPaddingTop) != null ? t : 0, 10);
      return Number.isNaN(r) ? 0 : r;
    }
    function c(e, t) {
      var n = 0;
      if (e != null && e.scrollTop === 0) {
        var r = e.scrollHeight,
          o = function () {
            if (n > 60) {
              t == null || t();
              return;
            }
            var a = e.scrollHeight - r;
            r !== e.scrollHeight
              ? ((e.scrollTop = a), t == null || t())
              : (window.requestAnimationFrame(o), n++);
          };
        window.requestAnimationFrame(o);
      }
    }
    ((i.scrollElementIntoViewIfNeeded = e),
      (i.getScrollParent = l),
      (i.getOffsetTopFromScrollParent = s),
      (i.getScrollPaddingTop = u),
      (i.cancelScrollUpOnDOMUpdate = c));
  },
  66,
);
