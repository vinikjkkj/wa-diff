__d(
  "RequestStreamHandler",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.onData,
          n = e.onFlowStatus,
          r = e.onLog,
          o = e.onRetryUpdateRequestBody,
          a = e.onTermination;
        ((this.$1 = t || function (e) {}),
          (this.$2 = a || function (e) {}),
          (this.$3 = r || function (e) {}),
          (this.$4 = n),
          (this.$5 = o));
      }
      var t = e.prototype;
      return (
        (t.onFlowStatus = function (t) {
          this.$4(t);
        }),
        (t.onData = function (t) {
          this.$1(t);
        }),
        (t.onTermination = function (t) {
          this.$2(r("err")(t));
        }),
        (t.onLog = function (t) {
          this.$3(t);
        }),
        (t.onRetryUpdateRequestBody = function () {
          if (this.$5 != null) return this.$5();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
