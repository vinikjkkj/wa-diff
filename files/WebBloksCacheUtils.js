__d(
  "WebBloksCacheUtils",
  ["WebBloksInt64", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(t, n) {
      var o,
        a = Date.now(),
        i = (o = r("WebBloksInt64")).fromString(n).multiply(o.fromNumber(e)),
        l = o.fromString(t.responseTimestampMs).add(i);
      return l.greaterThan(o.fromNumber(a));
    }
    function u(e, t) {
      var n = {};
      for (var r in t) t[r] !== void 0 && (n[r] = t[r]);
      return e + ":" + d(n);
    }
    function c(e, t) {
      var n = {};
      for (var r in e) {
        var a = t[e[r]];
        a != null && (n[r] = a);
      }
      return o("WebBloksUtils").cast(n);
    }
    function d(e, t) {
      t === void 0 && (t = !1);
      var n = Array.isArray(e),
        r = o("WebBloksUtils").isObject(e);
      if (n || r) {
        var a = Object.keys(e);
        if (a.length) {
          for (var i = a.sort(), l = [], s = 0; s < i.length; s++) {
            var u = i[s],
              c = e[u];
            if (!(t && c == null && r)) {
              var m = void 0;
              (o("WebBloksUtils").isObject(c) || Array.isArray(c)
                ? (m = d(c, t))
                : (m = JSON.stringify(c)),
                l.push(u + ":" + m));
            }
          }
          return n ? "[" + l.join(",") + "]" : "{" + l.join(",") + "}";
        }
      }
      return JSON.stringify(e);
    }
    ((l.isResponseFresh = s),
      (l.generateCacheKey = u),
      (l.resolveConsumedParams = c));
  },
  98,
);
