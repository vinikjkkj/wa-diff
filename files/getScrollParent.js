__d(
  "getScrollParent",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = getComputedStyle(e),
        o = n.position === "absolute",
        a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
      if (n.position === "fixed") return r("nullthrows")(document.body);
      for (var i = e; (i = i.parentElement); )
        if (
          ((n = getComputedStyle(i)),
          !(o && n.position === "static") &&
            a.test(n.overflow + n.overflowY + n.overflowX) &&
            i instanceof HTMLElement)
        )
          return i;
      return r("nullthrows")(document.body);
    }
    l.default = e;
  },
  98,
);
