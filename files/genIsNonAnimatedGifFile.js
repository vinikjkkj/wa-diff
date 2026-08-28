__d(
  "genIsNonAnimatedGifFile",
  ["genArrayBufferFromFile"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e[t] === 0 &&
        e[t + 1] === 33 &&
        e[t + 2] === 249 &&
        e[t + 3] === 4 &&
        e[t + 8] === 0 &&
        (e[t + 9] === 44 || e[t + 9] === 33)
      );
    }
    function s(t) {
      var n = [71, 73, 70, 56, 55, 97],
        o = [71, 73, 70, 56, 57, 97];
      return r("genArrayBufferFromFile")(t).then(function (t) {
        var r = new Uint8Array(t),
          a = r.slice(0, 6).reduce(function (e, t, r) {
            return e && t === n[r];
          }, !0);
        if (a) return !0;
        var i = r.slice(0, 6).reduce(function (e, t, n) {
          return e && t === o[n];
        }, !0);
        if (!i) return !1;
        for (var l = 0, s = 6; s + 9 < r.length; ++s)
          if ((e(r, s) && l++, l > 1)) return !1;
        return !0;
      });
    }
    l.default = s;
  },
  98,
);
