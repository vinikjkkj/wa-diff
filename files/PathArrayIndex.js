__d(
  "PathArrayIndex",
  ["invariant", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "$$Index-";
    function c(e) {
      return typeof e != "string" ? !1 : e.startsWith(u);
    }
    function d(e) {
      return u + String(e);
    }
    function m(e) {
      return (_(e) || s(0, 29438), e.slice(u.length));
    }
    function p(e) {
      return e.map(function (e) {
        return _(e) ? g(e) : e;
      });
    }
    var _ = (e = r("memoizeWithArgs"))(c, function (e) {
        return e;
      }),
      f = e(d, function (e) {
        return String(e);
      }),
      g = e(m, function (e) {
        return e;
      }),
      h = e(p, function (e) {
        return e.join(",");
      });
    ((l.isPathArrayIndex = _),
      (l.pathArrayIndex = f),
      (l.getPathArrayIndex = g),
      (l.unwrapPathArrayIndex = h));
  },
  98,
);
