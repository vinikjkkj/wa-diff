__d(
  "JSResource",
  ["JSResourceReferenceImpl"],
  function (t, n, r, o, a, i, l) {
    var e = {};
    function s(t, n) {
      e[t] = n;
    }
    function u(t) {
      return e[t];
    }
    function c(e) {
      var t = e,
        n = u(t);
      if (n) return n;
      var o = new (r("JSResourceReferenceImpl"))(t);
      return (s(t, o), o);
    }
    ((c.loadAll = r("JSResourceReferenceImpl").loadAll), (l.default = c));
  },
  98,
);
