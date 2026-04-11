__d(
  "WAWebTPPerformanceListener",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$3 = null), (this.$4 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.onMessage = function (t) {
          if (
            (t.type === "APP_READY" &&
              ((this.$2 = t.timestamp), this.$5(t.type, this.$2 - this.$1)),
            t.type === "RENDER_PDF_PREVIEW_RESPONSE")
          ) {
            var e;
            ((this.$4 = t.timestamp),
              this.$5(t.type, this.$4 - ((e = this.$3) != null ? e : 0)));
          }
        }),
        (t.onPublish = function (t) {
          t.type === "RENDER_PDF_PREVIEW" && (this.$3 = t.timestamp);
        }),
        (t.$5 = function (t, n) {}),
        e
      );
    })();
    l.WAWebTPPerformanceListener = e;
  },
  98,
);
