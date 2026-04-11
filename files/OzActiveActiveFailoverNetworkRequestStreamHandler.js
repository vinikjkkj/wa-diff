__d(
  "OzActiveActiveFailoverNetworkRequestStreamHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.onResponse = function (t, n) {
          var e = t.headers;
          return (e && e.has("x-fb-video-replica") && this.$1(t, n), null);
        }),
        (t.onError = function (t, n) {
          return null;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
