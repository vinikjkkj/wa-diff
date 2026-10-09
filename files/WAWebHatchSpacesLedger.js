__d(
  "WAWebHatchSpacesLedger",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return (t ? "r" : "u") + ":" + e;
    }
    function l(e) {
      return e.slice(2);
    }
    function s(t, n, r, o) {
      if (o === 0) return !0;
      var a = t.rowTsMs.get(e(n, !r));
      if (a != null && o < a) return !1;
      var i = t.rowTsMs.get(e(n, r));
      return u(o, t.snapshotTsMs, i)
        ? !0
        : t.spaces.has(n) === r && o > t.snapshotTsMs && o === i && o === a;
    }
    function u(e, t, n) {
      return e === 0 || (e > t && (n == null || e > n));
    }
    function c(e, t, n) {
      return n === 0 ? e : new Map(e).set(t, n);
    }
    function d(e, t, n) {
      if (n != null) return e;
      var r = new Set();
      for (var o of t.values()) o.iconUrl != null && r.add(o.iconUrl);
      var a = new Map();
      for (var i of e) {
        var l = i[0],
          s = i[1];
        r.has(l) && a.set(l, s);
      }
      return a.size === e.size ? e : a;
    }
    ((i.rowKey = e),
      (i.itemKeyOf = l),
      (i.admitRow = s),
      (i.admit = u),
      (i.recorded = c),
      (i.referencedBy = d));
  },
  66,
);
