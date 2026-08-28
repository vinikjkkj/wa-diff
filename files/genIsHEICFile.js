__d(
  "genIsHEICFile",
  ["genArrayBufferFromFile"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [102, 116, 121, 112],
        n = [104, 101, 105, 99],
        o = [104, 101, 105, 120];
      return r("genArrayBufferFromFile")(e).then(function (e) {
        var r = new Uint8Array(e),
          a = r.slice(4, 8).reduce(function (e, n, r) {
            return e && n === t[r];
          }, !0);
        if (!a) return !1;
        var i = r.slice(8, 12).reduce(function (e, t, r) {
          return e && t === n[r];
        }, !0);
        if (i) return !0;
        var l = r.slice(8, 12).reduce(function (e, t, n) {
          return e && t === o[n];
        }, !0);
        return !!l;
      });
    }
    l.default = e;
  },
  98,
);
