__d(
  "WAArrayMoveToFirst",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n,
        r = !1;
      for (n = 0; n < e.length; n++)
        if (e[n] === t) {
          r = !0;
          break;
        }
      if (r) {
        var o = e[n];
        (e.splice(n, 1), e.unshift(o));
      }
    }
    i.default = e;
  },
  66,
);
