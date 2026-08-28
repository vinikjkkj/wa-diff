__d(
  "webTableInfiniteScrollTriggerRoot",
  ["getScrollParent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "0px 0px 30% 0px";
    function s(e) {
      if (e == null || !(e instanceof HTMLElement)) return null;
      for (var t = e; ; ) {
        var n = r("getScrollParent")(t, !1);
        if (n === document.body || n === document.documentElement) return null;
        if (n.scrollHeight > n.clientHeight) return n;
        t = n;
      }
    }
    ((l.PREFETCH_ROOT_MARGIN = e), (l.resolveScrollportRoot = s));
  },
  98,
);
