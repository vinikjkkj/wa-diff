__d(
  "base64Binary",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      for (var t = "", n = 0; n < e.byteLength; n += 3) {
        var r = e.subarray(n, n + 3);
        t += m(r);
      }
      var o = (e.byteLength + 2) % 3;
      return t.slice(0, t.length + o - 2) + "==".slice(o);
    }
    function u(e) {
      var t, n;
      e.length % 4 === 0 || s(0, 51156);
      for (
        var r = e.length / 4,
          o =
            (t = (n = e.match(/={0,2}$/)) == null ? void 0 : n[0].length) !=
            null
              ? t
              : 0,
          a = new Uint8Array(r * 3 - o),
          i = 0;
        i < r;
        i++
      ) {
        var l = p(e.slice(i * 4, i * 4 + 4));
        a.set(l.subarray(0, a.byteLength - i * 3), i * 3);
      }
      return a;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      d =
        ">___?456789:;<=___\0___\0\x07\b	\n\v\f\r______\x1B !\"#$%&'()*+,-./0123";
    function m(e) {
      var t,
        n,
        r =
          (e[0] << 16) |
          (((t = e[1]) != null ? t : 0) << 8) |
          ((n = e[2]) != null ? n : 0);
      return String.fromCharCode(
        c.charCodeAt(r >>> 18),
        c.charCodeAt((r >>> 12) & 63),
        c.charCodeAt((r >>> 6) & 63),
        c.charCodeAt(r & 63),
      );
    }
    function p(e) {
      var t =
        (d.charCodeAt(e.charCodeAt(0) - 43) << 18) |
        (d.charCodeAt(e.charCodeAt(1) - 43) << 12) |
        (d.charCodeAt(e.charCodeAt(2) - 43) << 6) |
        d.charCodeAt(e.charCodeAt(3) - 43);
      return new Uint8Array([t >>> 16, (t >>> 8) & 255, t & 255]);
    }
    ((l.encode = e), (l.decode = u));
  },
  98,
);
