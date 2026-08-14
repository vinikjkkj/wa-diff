__d(
  "WormRangeIterator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t.map(function (t) {
        return e[t];
      });
      return n;
    }
    function l(t, n, r, o) {
      var a = t.at(0),
        i = t.at(-1);
      return {
        endCursor: i && e(i, n),
        hasNext: r,
        hasPrevious: o,
        startCursor: a && e(a, n),
      };
    }
    function s(e, t, n, r) {
      var o = e
          .flatMap(function (e) {
            return e.data;
          })
          .sort(function (e, r) {
            return u(e, r, t) * (n === "asc" ? 1 : -1);
          })
          .slice(0, r + 1),
        a = o.slice(0, r),
        i = o.length > r,
        s = e.some(function (e) {
          return e.cursorInfo.hasPrevious;
        }),
        c = l(a, t, i, s);
      return { cursorInfo: c, data: a };
    }
    function u(t, n, r) {
      for (var o = e(t, r), a = e(n, r), i = 0; i < o.length; i++)
        if (o[i] !== a[i]) {
          var l = o[i] > a[i];
          return l ? 1 : -1;
        }
      return 0;
    }
    ((i.makeCursor = e), (i.makeCursorInfoFromList = l), (i.mergeRanges = s));
  },
  66,
);
