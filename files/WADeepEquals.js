__d(
  "WADeepEquals",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return l(e, t, null);
    }
    function l(e, t, n) {
      if (e === t) return !0;
      if (!e || !t || (typeof e != "object" && typeof t != "object")) return !1;
      var r = n != null ? n : new Map(),
        o = r.get(e);
      if (o != null) {
        if (o.has(t)) return !0;
        o.add(t);
      } else r.set(e, new Set([t]));
      var a = Array.isArray(e),
        i = Array.isArray(t);
      if (a !== i) return !1;
      var s = !0;
      if (a) {
        var u = e.length;
        if (u !== t.length) return !1;
        for (var c = 0; s && c < u; c++) s = l(e[c], t[c], r);
        return s;
      }
      for (var d = Object.keys(e), m = 0; s && m < d.length; m++) {
        var p = d[m];
        s = t.propertyIsEnumerable(p) && l(e[p], t[p], r);
      }
      if (!s || Object.keys(t).length !== d.length) return !1;
      if (d.length === 0) {
        var _ = Object.prototype.toString.call(e),
          f = Object.prototype.toString.call(t);
        return ArrayBuffer.isView(e) &&
          ArrayBuffer.isView(t) &&
          !(e instanceof DataView) &&
          !(t instanceof DataView) &&
          e.constructor === t.constructor
          ? !0
          : _ === "[object Object]" && f === "[object Object]";
      }
      return !0;
    }
    i.deepEqual = e;
  },
  66,
);
