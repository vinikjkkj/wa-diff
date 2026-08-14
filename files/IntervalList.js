__d(
  "IntervalList",
  ["FBLogger", "JSONStringifyBigIntSafe", "ReQLBounds", "ReStoreKeyComparer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      if (e == null)
        throw r("FBLogger")("messenger_web").mustfixThrow("must not be null");
      return e;
    }
    function c(t, n) {
      var a = new Map(),
        i = new Map(),
        l = new Map();
      function c(e, n) {
        return n == null
          ? !0
          : (n.gt !== void 0
              ? t(e, n.gt) > 0
              : n.gte !== void 0
                ? t(e, n.gte) >= 0
                : !0) &&
              (n.lt !== void 0
                ? t(e, n.lt) < 0
                : n.lte !== void 0
                  ? t(e, n.lte) <= 0
                  : !0);
      }
      function* d(t) {
        for (var l = 0; l < t.length && i.size; ) {
          l++;
          var s = t.slice(0, l);
          l < n && s.push((e || (e = o("ReStoreKeyComparer"))).MAX_KEY);
          var u = i.get(r("JSONStringifyBigIntSafe")(s));
          if (u != null) for (var d of u) yield d;
        }
        for (var m of a.entries()) {
          var p = m[0],
            _ = m[1];
          a.has(p) && c(t, _) && (yield p);
        }
      }
      function m(e) {
        var t = l.get(e);
        if (t != null) {
          l.delete(e);
          var n = u(i.get(t));
          (n.delete(e), n.size === 0 && i.delete(t));
        } else a.delete(e);
      }
      function p(e, t) {
        var u;
        if (
          e &&
          e.gte != null &&
          e.lte != null &&
          (u = r("JSONStringifyBigIntSafe")(
            (s || (s = o("ReQLBounds"))).nextKey(e.gte, n),
          )) === r("JSONStringifyBigIntSafe")(e.lte)
        ) {
          var c = i.get(u);
          (c == null && ((c = new Set()), i.set(u, c)), c.add(t), l.set(t, u));
        } else a.set(t, e);
      }
      return { delete: m, findIntersecting: d, set: p };
    }
    l.default = c;
  },
  98,
);
