__d(
  "oz-player/networks/OzClockSyncNetworkRequestStreamHandler",
  ["oz-player/networks/OzClientClock", "oz-player/networks/OzTransformStream"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.onResponse = function (t, n) {
          var e = t.headers;
          if (!e) return null;
          var o = new (r("oz-player/networks/OzTransformStream"))();
          return (
            o.addListener("writableClose", function () {
              r(
                "oz-player/networks/OzClientClock",
              ).updateOffsetFromHeaderResponse(n, e);
            }),
            o
          );
        }),
        (t.onError = function (t, n) {
          return null;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
