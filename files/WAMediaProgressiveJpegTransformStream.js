__d(
  "WAMediaProgressiveJpegTransformStream",
  ["WABinary"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.scanLengths,
        n = [],
        r = 0;
      for (var a of t) ((r += a), n.push(r));
      var i = new (o("WABinary").Binary)(),
        l = 0,
        s = 0,
        u = new TransformStream({
          transform: function (r, o) {
            var e = r;
            for (
              s += e.byteLength, i.writeByteArray(e);
              l < t.length && n[l] < s;
              l++
            ) {
              var a = i.readByteArrayView(t[l]);
              o.enqueue(a);
            }
          },
          flush: function (t) {
            t.enqueue(i.readByteArrayView());
          },
        });
      return u;
    }
    l.makeProgressiveJpegHandlerTransformStream = e;
  },
  98,
);
