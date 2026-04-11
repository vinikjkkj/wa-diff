__d(
  "WADeepEquals",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      if (t === n) return !0;
      if (!t || !n || (typeof t != "object" && typeof n != "object")) return !1;
      var r = Array.isArray(t),
        o = Array.isArray(n);
      if (r !== o) return !1;
      var a = !0;
      if (r) {
        var i = t.length;
        if (i !== n.length) return !1;
        for (var l = 0; a && l < i; l++) a = e(t[l], n[l]);
        return a;
      }
      for (var s = Object.keys(t), u = 0; a && u < s.length; u++) {
        var c = s[u];
        a = n.propertyIsEnumerable(c) && e(t[c], n[c]);
      }
      return a && Object.keys(n).length === s.length;
    }
    i.deepEqual = e;
  },
  66,
);
