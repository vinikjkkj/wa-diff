__d(
  "ReQLBounds",
  ["ReStoreKeyComparer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return t.length < e ? [].concat(t, [n]) : t;
    }
    function u(t, n) {
      return (
        n === void 0 && (n = -1),
        s(n, t, (e || (e = o("ReStoreKeyComparer"))).MAX_KEY)
      );
    }
    function c(t, n, r) {
      if (t != null && n != null)
        return (e || (e = o("ReStoreKeyComparer"))).compareKey(t[1], n[1]) * r >
          0
          ? t[0]
          : n[0];
      if (t != null) return t[0];
      if (n != null) return n[0];
    }
    function d(e, t) {
      return c(
        (e == null ? void 0 : e.gt) != null
          ? [{ gt: e.gt }, u(e.gt)]
          : (e == null ? void 0 : e.gte) != null
            ? [{ gte: e.gte }, e.gte]
            : void 0,
        (t == null ? void 0 : t.gt) != null
          ? [{ gt: t.gt }, u(t.gt)]
          : (t == null ? void 0 : t.gte) != null
            ? [{ gte: t.gte }, t.gte]
            : void 0,
        1,
      );
    }
    function m(e, t) {
      return c(
        (e == null ? void 0 : e.lt) != null
          ? [{ lt: e.lt }, e.lt]
          : (e == null ? void 0 : e.lte) != null
            ? [{ lte: e.lte }, u(e.lte)]
            : void 0,
        (t == null ? void 0 : t.lt) != null
          ? [{ lt: t.lt }, t.lt]
          : (t == null ? void 0 : t.lte) != null
            ? [{ lte: t.lte }, u(t.lte)]
            : void 0,
        -1,
      );
    }
    function p(t, n) {
      if (t != null) {
        var r = babelHelpers.extends({}, t);
        return (
          r.gt != null &&
            (r.gt = s(n, r.gt, (e || (e = o("ReStoreKeyComparer"))).MAX_KEY)),
          r.lte != null &&
            (r.lte = s(n, r.lte, (e || (e = o("ReStoreKeyComparer"))).MAX_KEY)),
          r
        );
      }
    }
    function _(t, n, r) {
      t.forEach(function (t) {
        var a = t[0],
          i = t[1],
          l =
            (a == null ? void 0 : a.gt) != null
              ? (e || (e = o("ReStoreKeyComparer"))).compareKey(n, a.gt) > 0
              : (a == null ? void 0 : a.gte) != null
                ? (e || (e = o("ReStoreKeyComparer"))).compareKey(n, a.gte) >= 0
                : !0,
          s =
            (a == null ? void 0 : a.lt) != null
              ? (e || (e = o("ReStoreKeyComparer"))).compareKey(n, a.lt) < 0
              : (a == null ? void 0 : a.lte) != null
                ? (e || (e = o("ReStoreKeyComparer"))).compareKey(n, a.lte) <= 0
                : !0;
        if (l && s) return r(i);
      });
    }
    function f(e, t) {
      if (t == null) return e;
      var n = d(t, e),
        r = m(t, e);
      if (n != null && r != null) return babelHelpers.extends({}, n, r);
      if (n != null) return n;
      if (r != null) return r;
    }
    ((l.nextKey = u),
      (l.extendBounds = p),
      (l.forEachMatchingBounds = _),
      (l.mergeBounds = f));
  },
  98,
);
