__d(
  "amNetworkFetchUtils",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o = (n = t.metadata) == null ? void 0 : n.freshTTLSeconds,
        a = typeof o == "number" ? o : null,
        i = (r = t.metadata) == null ? void 0 : r.cacheTTLSeconds,
        l = typeof i == "number" ? i : null;
      if (a == null && l == null) return !0;
      var s = l != null ? l : 1 / 0,
        u = a != null ? a : s;
      u > s && (u = s);
      var c = Array.isArray(e) ? e : [e];
      for (var d of c) {
        var m,
          p,
          _,
          f = null;
        ((m = d.extensions) == null ? void 0 : m.server_metadata) != null &&
          ((p = d.extensions.server_metadata) == null
            ? void 0
            : p.time_at_flush_ms) != null &&
          typeof ((_ = d.extensions.server_metadata) == null
            ? void 0
            : _.time_at_flush_ms) == "number" &&
          (f = d.extensions.server_metadata.time_at_flush_ms);
        var g = f == null ? 0 : (Date.now() - f) / 1e3;
        if (g > u) return !1;
      }
      return !0;
    }
    function u(e) {
      return e.operationKind === "mutation";
    }
    function c(e) {
      return e.operationKind === "query";
    }
    function d(e) {
      var t = e.id,
        n = e.text,
        r = t != null ? t : n;
      return (r != null || s(0, 2664), r);
    }
    ((l.cacheDataIsFresh = e),
      (l.isMutation = u),
      (l.isQuery = c),
      (l.getCacheID = d));
  },
  98,
);
