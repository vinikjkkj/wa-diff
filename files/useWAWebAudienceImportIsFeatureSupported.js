__d(
  "useWAWebAudienceImportIsFeatureSupported",
  [
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBizGatingUtils",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("WAWebBizGatingUtils").isBizBroadcastContactImportEnabled(),
        t = c(e ? null : !1),
        r = t[0],
        a = t[1];
      return (
        u(
          function () {
            r == null &&
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                a(
                  yield o(
                    "WAWebBizBroadcastsDeviceCapability",
                  ).getPrimarySupportsBusinessBroadcastListImport(),
                );
              })();
          },
          [r],
        ),
        r
      );
    }
    l.useWAWebAudienceImportIsFeatureSupported = d;
  },
  98,
);
