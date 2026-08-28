__d(
  "AdsRealtimeLoggerClass",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e || "AdsRealtime"),
          (this.$2 = window.location.search.indexOf("showpush") > -1));
      }
      var t = e.prototype;
      return (
        (t.enableDebug = function () {
          this.$2 = !0;
        }),
        (t.disableDebug = function () {
          this.$2 = !1;
        }),
        (t.isDebugEnabled = function () {
          return this.$2;
        }),
        (t.debugLog = function (t) {
          if (this.$2) {
            for (
              var e,
                n = arguments.length,
                o = new Array(n > 1 ? n - 1 : 0),
                a = 1;
              a < n;
              a++
            )
              o[a - 1] = arguments[a];
            (e = r("FBLogger")("ads_realtime")).info.apply(
              e,
              ["[" + this.$1 + "] " + t].concat(o.map(String)),
            );
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
