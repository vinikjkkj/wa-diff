__d(
  "oz-player/utils/maybeConvertReadableStreamToOzReadableStream",
  ["asyncToGeneratorRuntime", "oz-player/shims/OzStreams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!o("oz-player/shims/OzStreams").OzReadableStreamIsPolyfilled)
        return e;
      var t = e.getReader();
      return new (o("oz-player/shims/OzStreams").OzReadableStream)({
        start: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            for (;;) {
              var n = yield t.read();
              if (n.done) break;
              e.enqueue(n.value);
            }
            e.close();
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
      });
    }
    l.default = e;
  },
  98,
);
