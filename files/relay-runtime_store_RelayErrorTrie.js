__d(
  "relay-runtime/store/RelayErrorTrie",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["path", "locations"],
      l = Symbol("$SELF");
    function s(t) {
      if (t == null) return null;
      var n = new Map();
      for (var r of t) {
        var o = r.path,
          a = r.locations,
          i = babelHelpers.objectWithoutPropertiesLoose(r, e);
        if (o != null) {
          var s = o.length;
          if (s !== 0) {
            for (var u = s - 1, c = n, d = 0; d < u; d++) {
              var m = o[d],
                p = c.get(m);
              if (p instanceof Map) {
                c = p;
                continue;
              }
              var _ = new Map();
              (Array.isArray(p) && _.set(l, p), c.set(m, _), (c = _));
            }
            var f = o[u],
              g = c.get(f);
            (g instanceof Map && ((c = g), (g = c.get(f)), (f = l)),
              Array.isArray(g) ? g.push(i) : c.set(f, [i]));
          }
        }
      }
      return n;
    }
    function u(e, t) {
      var n = e.get(t);
      if (n == null) return null;
      if (Array.isArray(n)) return n;
      var r = [];
      return (c(n, r), r);
    }
    function c(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1],
          a = t.length;
        if ((Array.isArray(o) ? t.push.apply(t, o) : c(o, t), r !== l))
          for (var i = t.length, s = a; s < i; s++) {
            var u = t[s];
            u.path == null
              ? (t[s] = babelHelpers.extends({}, u, { path: [r] }))
              : u.path.unshift(r);
          }
      }
    }
    function d(e, t) {
      var n = e.get(t);
      return n instanceof Map ? n : null;
    }
    a.exports = {
      SELF: l,
      buildErrorTrie: s,
      getErrorsByKey: u,
      getNestedErrorTrieByKey: d,
    };
  },
  null,
);
