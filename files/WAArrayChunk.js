__d(
  "WAArrayChunk",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      n === void 0 && (n = !1);
      for (var o = 0, a = []; o < e.length; ) {
        for (var i = [], l = 0; o < e.length; ) {
          var s = e[o],
            u = r ? r(s) : 1;
          if ((!n && l === 0) || l + u <= t) ((l += u), i.push(s), o++);
          else {
            n && u > t && o++;
            break;
          }
        }
        i.length > 0 && a.push(i);
      }
      return a;
    }
    i.chunk = e;
  },
  66,
);
