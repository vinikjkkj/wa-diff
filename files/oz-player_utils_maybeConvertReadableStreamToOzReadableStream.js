__d(
  "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
  ["oz-player/shims/OzStreams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!o("oz-player/shims/OzStreams").OzReadableStreamIsPolyfilled)
        return e;
      var t = e.getReader();
      return new (o("oz-player/shims/OzStreams").OzReadableStream)({
        start: async function (n) {
          for (;;) {
            var e = await t.read();
            if (e.done) break;
            n.enqueue(e.value);
          }
          n.close();
        },
      });
    }
    l.default = e;
  },
  98,
);
