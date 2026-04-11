__d(
  "WAMapsShallowEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n;
      if (e.size !== t.size) return !1;
      for (var r of e) {
        var o = r[0],
          a = r[1];
        if (((n = t.get(o)), n !== a || (n === void 0 && !t.has(o)))) return !1;
      }
      return !0;
    }
    i.default = e;
  },
  66,
);
