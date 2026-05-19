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
      if (!a || Object.keys(n).length !== s.length) return !1;
      if (s.length === 0) {
        var d = Object.prototype.toString.call(t),
          m = Object.prototype.toString.call(n);
        return ArrayBuffer.isView(t) &&
          ArrayBuffer.isView(n) &&
          !(t instanceof DataView) &&
          !(n instanceof DataView) &&
          t.constructor === n.constructor
          ? !0
          : d === "[object Object]" && m === "[object Object]";
      }
      return !0;
    }
    i.deepEqual = e;
  },
  66,
);
