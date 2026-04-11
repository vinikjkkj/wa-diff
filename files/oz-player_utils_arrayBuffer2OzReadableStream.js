__d(
  "oz-player/utils/arrayBuffer2OzReadableStream",
  ["oz-player/shims/OzStreams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o("oz-player/shims/OzStreams").OzReadableStream)({
        start: function (n) {
          var t = new Uint8Array(e);
          (n.enqueue(t), n.close());
        },
      });
    }
    l.default = e;
  },
  98,
);
