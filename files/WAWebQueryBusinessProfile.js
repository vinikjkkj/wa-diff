__d(
  "WAWebQueryBusinessProfile",
  [
    "WAWebBackendErrors",
    "WAWebBusinessProfileVersioningBridge",
    "WAWebQueryBusinessProfileJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
          "WAWebBusinessProfileVersioningBridge",
        ).getBusinessProfileQueryVersion(),
        n = r("WAWebQueryBusinessProfileJob")(e, t);
      return o("WAWebBackendErrors").attachErrorLogger(
        n,
        "Query business profile failed",
      );
    }
    l.queryBusinessProfile = e;
  },
  98,
);
