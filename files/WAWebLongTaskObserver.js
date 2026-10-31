__d(
  "WAWebLongTaskObserver",
  [
    "WAWebDocumentVisibilityObserver",
    "WAWebFeatureDetectionLongTaskSupport",
    "WAWebMainThreadStallReporter",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        this.documentVisibilityObserver = new (o(
          "WAWebDocumentVisibilityObserver",
        ).WAWebDocumentVisibilityObserver)();
      }
      var t = e.prototype;
      return (
        (t.isSupported = function () {
          return o(
            "WAWebFeatureDetectionLongTaskSupport",
          ).isLongTaskSupported();
        }),
        (t.observe = function (t) {
          (t.observe({ type: "longtask", buffered: !1 }),
            this.documentVisibilityObserver.observe());
        }),
        (t.handle = function (t) {
          for (var e of t) {
            var n = e.startTime + e.duration;
            o("WAWebMainThreadStallReporter").reportMainThreadStall({
              durationMs: e.duration,
              endTime: n,
              source: "longtask",
              visibility: this.documentVisibilityObserver,
            });
          }
        }),
        e
      );
    })();
    l.WAWebLongTaskObserver = e;
  },
  98,
);
