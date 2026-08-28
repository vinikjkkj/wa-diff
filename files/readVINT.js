__d(
  "readVINT",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (
        var n = 0,
          r = Math.min(e.length, t != null ? t : Number.MAX_VALUE),
          o = 0;
        n < r;
      ) {
        var a = e[n];
        if (a === 0) ((o += 8), n++);
        else {
          if (((o += 8 - Math.floor(Math.log2(a))), o > r || o < 0))
            return null;
          var i = l(e, o);
          return { vintData: i, nextReadOffset: o };
        }
      }
      return null;
    }
    function l(e, t) {
      var n = Math.floor(t / 8),
        r = e[n],
        o = 8 - (t % 8);
      o < 8 && (r ^= 1 << o);
      var a = new Uint8Array(new ArrayBuffer(t - n));
      return ((a[0] = r), a.set(e.slice(n + 1, t), 1), a);
    }
    i.default = e;
  },
  66,
);
