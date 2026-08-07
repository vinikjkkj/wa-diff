__d(
  "WAWebParseLocaleSubtags",
  [],
  function (t, n, r, o, a, i) {
    var e = /^[a-z0-9-]+$/i,
      l = /^[a-z]{2,3}$/i,
      s = /^[a-z]{4}$/i,
      u = /^(?:[a-z]{2}|[0-9]{3})$/i;
    function c(t) {
      if (!e.test(t)) return d();
      var n = t.split("-");
      if (!l.test(n[0])) return d();
      var r = { language: n[0], script: null, region: null },
        o = 1;
      return (
        o < n.length && s.test(n[o]) && ((r.script = n[o]), o++),
        o < n.length && u.test(n[o]) && (r.region = n[o]),
        r
      );
    }
    function d() {
      return { language: null, script: null, region: null };
    }
    i.default = c;
  },
  66,
);
