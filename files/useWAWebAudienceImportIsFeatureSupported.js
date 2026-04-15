__d(
  "useWAWebAudienceImportIsFeatureSupported",
  [
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBizGatingUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = o("WAWebBizGatingUtils").isBizBroadcastContactImportEnabled(),
        r = c(t ? null : !1),
        a = r[0],
        i = r[1],
        l,
        s;
      return (
        e[0] !== a
          ? ((l = function () {
              a == null &&
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  i(
                    yield o(
                      "WAWebBizBroadcastsDeviceCapability",
                    ).getPrimarySupportsBusinessBroadcastListImport(),
                  );
                })();
            }),
            (s = [a]),
            (e[0] = a),
            (e[1] = l),
            (e[2] = s))
          : ((l = e[1]), (s = e[2])),
        u(l, s),
        a
      );
    }
    l.useWAWebAudienceImportIsFeatureSupported = d;
  },
  98,
);
