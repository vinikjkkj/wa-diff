__d(
  "getBaseHScrollAccessibilityAlert",
  ["fbt", "compactMap", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      var i = r("compactMap")(n, function (n, r) {
        var i = n.getBoundingClientRect(),
          l = Math.round(i.left + i.width - e + a - o) <= 0,
          s = Math.round(i.left - e - t.clientWidth - a - o) >= 0;
        return !l && !s ? (r + 1).toString() : null;
      });
      return s._(/*BTDS*/ "Item {number} of {total}", [
        s._param("number", r("intlList")(i)),
        s._param("total", n.length),
      ]);
    }
    l.default = e;
  },
  226,
);
