__d(
  "ZenonVideoQpConversion",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 15, 17, 18, 19, 20, 21, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53,
        55, 57, 59, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100,
        103, 106, 109, 112, 115, 118, 121, 124, 127,
      ],
      l = [1, 5, 12, 28, 42, 53, 64];
    function s(t) {
      for (var n = 0; n < e.length; n++) if (e[n] >= t) return n;
      return 63;
    }
    function u(e) {
      for (
        var t = s(e), n = Math.max(1, Math.min(63, t)), r = l.length - 1, o = 0;
        o < l.length;
        o++
      )
        if (l[o] > n) {
          r = o;
          break;
        }
      return Math.min(
        51,
        Math.floor(12 + 6 * r + (6 * (n - l[r - 1])) / (l[r] - l[r - 1])),
      );
    }
    function c(e, t, n) {
      var r;
      if (e === 0) return 0;
      r = t / e;
      var o = r;
      return (n || (o = u(o)), Math.round(o));
    }
    i.convertQp = c;
  },
  66,
);
