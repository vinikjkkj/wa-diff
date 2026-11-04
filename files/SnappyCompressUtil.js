__d(
  "SnappyCompressUtil",
  ["SnappyCompress"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = t.Uint8Array,
      s = t.btoa,
      u = t.TextEncoder;
    function c(e) {
      if (e == null || s == null) return null;
      var t = null;
      try {
        t = r("SnappyCompress").compress(e);
      } catch (e) {
        return null;
      }
      var n = Array.from(t, function (e) {
        return String.fromCharCode(e);
      }).join("");
      return s(n);
    }
    function d(n) {
      if (e == null || s == null) return null;
      for (var r = new t.Uint8Array(n.length), o = 0; o < n.length; o++) {
        var a = n.charCodeAt(o);
        if (a > 127) return null;
        r[o] = a;
      }
      return c(r);
    }
    function m(t) {
      if (e == null) return null;
      var n = null;
      if (u != null) n = new u().encode(t);
      else {
        n = new e(t.length);
        for (var o = 0; o < t.length; o++) {
          var a = t.charCodeAt(o);
          if (a > 127) return null;
          n[o] = a;
        }
      }
      var i = null;
      try {
        i = r("SnappyCompress").compress(n);
      } catch (e) {
        return null;
      }
      return i;
    }
    ((l.compressStringToSnappy = d),
      (l.compressStringToSnappyBinary = m),
      (l.compressUint8ArrayToSnappy = c));
  },
  98,
);
