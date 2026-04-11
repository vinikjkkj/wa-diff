__d(
  "WAArrayBuffersConcat",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.reduce(function (e, t) {
          return e + t.byteLength;
        }, 0),
        o = new Uint8Array(r),
        a = 0;
      return (
        t.forEach(function (e) {
          (o.set(new Uint8Array(e), a), (a += e.byteLength));
        }),
        o.buffer
      );
    }
    i.concatArrayBuffers = e;
  },
  66,
);
