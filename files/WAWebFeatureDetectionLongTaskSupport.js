__d(
  "WAWebFeatureDetectionLongTaskSupport",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e;
      return (
        typeof ((e = self.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        self.PerformanceObserver.supportedEntryTypes.includes("longtask")
      );
    }
    i.isLongTaskSupported = e;
  },
  66,
);
