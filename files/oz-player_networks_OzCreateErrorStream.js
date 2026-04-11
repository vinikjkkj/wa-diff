__d(
  "oz-player/networks/OzCreateErrorStream",
  ["oz-player/shims/OzStreams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new (o("oz-player/shims/OzStreams").OzReadableStream)({
        pull: function (n) {
          n.error(e);
        },
      });
    }
    l.default = e;
  },
  98,
);
