__d(
  "WAWebLongTaskObserver",
  ["WAWebDocumentVisibilityObserver", "WAWebMainThreadStallReporter"],
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
          var e;
          return (
            typeof ((e = window.PerformanceObserver) == null ||
            (e = e.supportedEntryTypes) == null
              ? void 0
              : e.includes) == "function" &&
            window.PerformanceObserver.supportedEntryTypes.includes("longtask")
          );
        }),
        (t.observe = function (t) {
          (t.observe({ type: "longtask", buffered: !1 }),
            this.documentVisibilityObserver.observe());
        }),
        (t.handle = function (t) {
          for (var e of t) {
            var n = e.startTime + e.duration;
            o("WAWebMainThreadStallReporter").reportMainThreadStall(
              e.duration,
              n,
              this.documentVisibilityObserver,
              "longtask",
            );
          }
        }),
        e
      );
    })();
    l.WAWebLongTaskObserver = e;
  },
  98,
);
