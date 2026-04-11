__d(
  "OzVideoLiveTraceNetworkRequestStreamHandler",
  [
    "oz-player/networks/OzTransformStream",
    "oz-player/utils/OzResourceTimingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        (t === void 0 && (t = !1),
          (this.$2 = !1),
          (this.$1 = e),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.onResponse = function (t, n) {
          var e = this,
            a = t.headers,
            i = null;
          if (!this.$1) return null;
          var l = new (r("oz-player/networks/OzTransformStream"))();
          return (
            l.addListener("writableClose", function () {
              var t = {},
                r = o(
                  "oz-player/utils/OzResourceTimingUtils",
                ).getLatestResourceTimingEntry(n);
              (r &&
                (t.lat = Math.round(
                  r.responseStart - r.requestStart,
                ).toString()),
                e.$1 && a && e.$1(a, i, t));
            }),
            this.$2 &&
              l.addListener("writableWrite", function (e) {
                i === null ? (i = [e]) : i.push(e);
              }),
            l
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
