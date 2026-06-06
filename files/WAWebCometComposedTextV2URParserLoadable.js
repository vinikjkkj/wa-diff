__d(
  "WAWebCometComposedTextV2URParserLoadable",
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
            "CometComposedTextV2URParser.react",
          )
            .__setRef("WAWebCometComposedTextV2URParserLoadable")
            .load();
          return e;
        }),
        "CometComposedTextV2URParser",
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
    ((l.requireBundle = u), (l.CometComposedTextV2URParserLoadable = c));
  },
  98,
);
