__d(
  "genIsNonAnimatedWebPFile",
  ["genArrayBufferFromFile"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8;
    function s(e) {
      return r("genArrayBufferFromFile")(e).then(function (e) {
        var t = new Uint8Array(e),
          n = t.slice(12, 16).reduce(function (e, t, n) {
            return e + String.fromCharCode(t);
          }, "");
        if (n === "VP8X") {
          var r = t[20],
            o = r.toString(2).padStart(8, "0");
          if (o[6] === "1") return !u(t);
        }
        return !0;
      });
    }
    function u(t) {
      for (var n = 12, r = 0; r < 2 && n + e < t.length; ) {
        var o = c(t, n);
        o === "ANMF" && r++;
        var a = d(t, n + 4),
          i = a % 2,
          l = e + a + i;
        n += l;
      }
      return r > 1;
    }
    function c(e, t) {
      return e.slice(t, t + 4).reduce(function (e, t, n) {
        return e + String.fromCharCode(t);
      }, "");
    }
    function d(e, t) {
      return parseInt(
        e.slice(t, t + 4).reduce(function (e, t, n) {
          return t.toString(2).padStart(8, "0") + e;
        }, ""),
        2,
      );
    }
    l.default = s;
  },
  98,
);
