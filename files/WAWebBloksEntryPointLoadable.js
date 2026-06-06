__d(
  "WAWebBloksEntryPointLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBloksEntryPoint.react",
          )
            .__setRef("WAWebBloksEntryPointLoadable")
            .load();
          return e;
        }),
        "WAWebBloksEntryPoint",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function () {
          return s.jsx(o("WAWebSpinner.react").Spinner, {
            size: 24,
            stroke: 4,
          });
        },
      });
    ((l.requireBundle = u), (l.WAWebBloksEntryPointLoadable = c));
  },
  98,
);
