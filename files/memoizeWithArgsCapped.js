__d(
  "memoizeWithArgsCapped",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(t, n, o) {
      var a = o != null ? o : e,
        i,
        l = !1;
      return function () {
        if (l) {
          var e = t.apply(void 0, arguments);
          return e;
        }
        if ((i || (i = new Map()), i.size > a)) {
          ((l = !0), (i = null));
          var o = t.apply(void 0, arguments);
          return o;
        }
        var s = n.apply(void 0, arguments);
        i.has(s) || i.set(s, t.apply(void 0, arguments));
        var u = r("nullthrows")(i.get(s));
        return u;
      };
    }
    l.default = s;
  },
  98,
);
