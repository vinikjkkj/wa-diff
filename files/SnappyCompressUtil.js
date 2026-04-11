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
    var d = {
      compressUint8ArrayToSnappy: c,
      compressStringToSnappy: function (r) {
        if (e == null || s == null) return null;
        for (var n = new t.Uint8Array(r.length), o = 0; o < r.length; o++) {
          var a = r.charCodeAt(o);
          if (a > 127) return null;
          n[o] = a;
        }
        return d.compressUint8ArrayToSnappy(n);
      },
      compressStringToSnappyBinary: function (n) {
        if (e == null) return null;
        var t = null;
        if (u != null) t = new u().encode(n);
        else {
          t = new e(n.length);
          for (var o = 0; o < n.length; o++) {
            var a = n.charCodeAt(o);
            if (a > 127) return null;
            t[o] = a;
          }
        }
        var i = null;
        try {
          i = r("SnappyCompress").compress(t);
        } catch (e) {
          return null;
        }
        return i;
      },
    };
    i.exports = d;
  },
  34,
);
